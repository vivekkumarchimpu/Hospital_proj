import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
//import {uploadOnCloudinary} from "../utils/cloudinary.js"

import { User } from "../models/user.models.js"

const registerUser = asyncHandler(async (req, res) => {

    const { fullName, email, username, password } = req.body
    console.log("fullName: ", fullName);
    console.log("email: ", email);
    console.log("username: ", username);
    console.log("password", password);




    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError(409, "User with email or userName already exists")
    }


    // const profileImagePath = req.files?.profileImage[0]?.path;


    // if (!profileImagePath) {
    //     throw new ApiError(400, "Profile Image is required")
    // }

    // const profileImage = await uploadOnCloudinary(profileImagePath)



    // if (!profileImage) {
    //     throw new ApiError(400, "Profile Image is required")
    // }


    const user = await User.create({
        fullName,
        email,
        password,
        username,
        //profileImage: profileImage.url,
    })
    const createUser = await User.findById(user._id).select("-password")
    if (!createUser) {
        throw new ApiError(500, "Somthing went wrong while registering the user")
    }

    return res
        .status(201)
        .json(new ApiResponse(200, createUser, "User registered Successfully"))
})

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new ApiError(400, "Username and Password are required ! ")
    }
    const user = await User.findOne({
        $and: [{username}, {password}]
    })
    console.log(user)

    if(!user){
        throw new ApiError(404, "User Does not Exist !")
    }
    
    if(!(user.username === username && user.password === password)){
        throw new ApiError(404, "Invailed Username or Password !!")
    }

    return res.status(200).json(new ApiResponse(200, "Login successfully"))
})


export {
    registerUser,
    loginUser
}