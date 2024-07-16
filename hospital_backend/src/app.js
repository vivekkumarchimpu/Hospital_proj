import express from "express"
import cors from "cors"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//routes import
import userRouter from "./routes/user.routes.js"
import adminRouter from "./routes/admin.routes.js"
import doctorRouter from "./routes/doctor.routes.js"
import patientRouter from "./routes/patient.routes.js"

//routes declaration
app.use("/Api/v1/users", userRouter)
app.use("/Api/v1/admins", adminRouter)
app.use("/Api/v1/doctors", doctorRouter)
app.use("/Api/v1/patients", patientRouter)

export {app}