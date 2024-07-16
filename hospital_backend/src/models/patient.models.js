import { Schema } from "mongoose";
import mongoose from "mongoose";

const patientSchema = new Schema(
    {
        pid: {
            type: String,
            required: true,
            unique: true,
        },
        pname: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
        },
        age: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        gname: {
            type: String,
        },
        mstatus: {
            type: String,
            required: true,
        },
        appointment: {
            type: String,
            required: true,
        },
        wardno: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)
export const Patient = mongoose.model("Patient", patientSchema)