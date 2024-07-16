import { Router } from "express"
import { loginUser, registerUser } from "../controllers/user.controller.js"
import { registerPatient, viewPatient } from "../controllers/patient.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "profileImage",
            maxCount: 1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)
router.route("/login/patientdetails").post(registerPatient)

router.route("/login/patientdetails/view").get(viewPatient)

export default router