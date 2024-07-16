import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { Patient } from "../models/patient.models.js"

const registerPatient = asyncHandler(async(req, res) => {
    

    const {pid, pname, gender, age, phone, gname, mstatus, appointment, wardno, address} = req.body

    // if (
    //     [pid, pname, gender, age, phone, gname, mstatus, appointment, wardno, address].some((field) => field?.trim() === "")
    // ) {
    //     throw new ApiError(400, "All fields are required")
    // }

    const patient = await Patient.create({
        pid,
        pname,
        gender,
        age,
        phone,
        gname,
        mstatus,
        appointment,
        wardno,
        address
    })
    const createPatient = await Patient.findById(patient._id)
    if (!createPatient) {
        throw new ApiError(500, "Somthing went wrong while registering the user")
    }

    return res
        .status(201)
        .json(new ApiResponse(200, createPatient, "Patient registered Successfully"))
})

const viewPatient = asyncHandler(async(req, res) => {
    const patientDetails = await Patient.find()
      
    return res
    .status(200)
    .json(new ApiResponse(200, patientDetails, "Patient Details fetched Successfully"))
})
const deletePatient = asyncHandler(async(req, res) => {

    const pid = req.body
    console.log(pid)
    const patient = await Patient.findByIdAndDelete(pid)
        
    return res
    .status(200)
    .json(new ApiResponse(200, patient, "Patient details Deleted successfully"))

})

export {
    registerPatient,
    viewPatient,
    deletePatient
}
