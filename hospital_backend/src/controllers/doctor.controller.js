import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { Doctor } from "../models/doctor.models.js";


const addingDoctordetails = asyncHandler(async(req, res) => {

    const { fullname, department, phone, email, mstatus, joined, address, roomno } = req.body

    if(
        [ fullname, department, phone, email, mstatus, joined, address, roomno ].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedDoctor = await Doctor.findOne({
        $or: [{phone}]
    })
    if(existedDoctor){
        throw new ApiError(409, "Doctor with Phone number already exists")
    }

    const doctor = await Doctor.create({
        fullname,
        department,
        phone,
        email,
        mstatus,
        joined,
        address,
        roomno
    })
    const createDoctor = await Doctor.findById(doctor._id)

    if(!createDoctor){
        throw new ApiError(500, "Something went wrong while Adding Doctor Details")
    }

    return res.status(201).json(new ApiResponse(200, createDoctor, "Doctor Details Added Successfully"))
})

const viewDoctordetails = asyncHandler( async(req, res) => {

     const doctorDetails = await Doctor.find()
      
    return res
    .status(200)
    .json(new ApiResponse(200, doctorDetails, "Doctor Details fetched Successfully"))
    
})

const updateDoctordetails = asyncHandler(async(req, res) => {
    const {fullname, department, phone, email, joined, mstatus, roomno, address} = req.body

    let drid;
    const drdetails = await Doctor.find()
    drdetails.map((item) => {
        
        if(item.phone === phone){
            drid = item._id
            // console.log("Doctro details => ", item.phone)
        }
    })
    
    
    //const drid = '66583d238c8a59d212d91874';

    const doctor = await Doctor.findByIdAndUpdate(
        
        //req.doctor?._id,

        drid,
        
        {
            $set: {
                fullname: fullname,
                department: department,
                phone: phone,
                email: email,
                joined: joined,
                mstatus: mstatus,
                roomno: roomno,
                address: address
            }
        },
        {new: true}
    )
    //console.log("req.doctor?._id : ", doctor._id.toString())
    
    
    return res
    .status(200)
    .json(new ApiResponse(200, doctor, "Doctor details updated successfully"))

    
})

const deleteDoctordetails = asyncHandler(async(req, res) => {

    const {phone} = req.body
    console.log(req.body.phone)

    let drid;
    const drdetails = await Doctor.find()
    drdetails.map((item) => {
        
        if(item.phone === phone){
            drid = item._id
        }
    })
    
    const doctor = await Doctor.findByIdAndDelete(drid)
        
    return res
    .status(200)
    .json(new ApiResponse(200, doctor, "Doctor details Deleted successfully"))


})

export {
    addingDoctordetails,
    viewDoctordetails,
    updateDoctordetails,
    deleteDoctordetails
}