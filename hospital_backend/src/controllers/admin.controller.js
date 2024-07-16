import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


import { Admin } from "../models/admin.models.js";

const registerAdmin = asyncHandler(async(req, res) => {

    const {username, password } = req.body
    console.log("username: ", username);
    console.log("password", password);
    
  
    

    if(
        [username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedAdmin = await Admin.findOne({
        $or: [{username}, {password}]
    })
    if(existedAdmin){
        throw new ApiError(409, "Admin username with password already exists")
    }


    const admin = await Admin.create({
        username,
        password,
    })
    const createAdmin = await Admin.findById(admin._id).select("-password")
    if(!createAdmin) {
        throw new ApiError(500, "Somthing went wrong while registering the user")
    }

    return res
    .status(201)
    .json(new ApiResponse(200, createAdmin, "Admin registered Successfully"))
})

const loginAdmin = asyncHandler(async (req, res) => {
    // req body -> data
    // username or email
    // find the user
    // password check
    

    const { username, password } = req.body
    // console.log("frontend username :", username)
    // console.log("frontend password :", password)
    if (!username && !password) {
        throw new ApiError(400, "username or password is required")
    }

    const admin = await Admin.findOne({
        $or: [{ username }, { password }]
    })

    if (!admin) {
        throw new ApiError(404, "admin does not exist")
    }

    // console.log("admin username:", admin.username)
    // console.log("admin password:", admin.password)
    
    if(!(admin.username === username && admin.password === password)){
        throw new ApiError(404, "Invailed username or password")       
    } 
    

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                "Admin logged In Successfully"
            )
        )
})

export{
    registerAdmin,
    loginAdmin,
}