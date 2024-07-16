import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
    {
        fullname:{
            type: String,
            required: true,
        },
        department:{
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        mstatus:{
            type: String,
            required: true,
        },
        joined:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        roomno:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)
export const Doctor = mongoose.model("Doctor", doctorSchema)