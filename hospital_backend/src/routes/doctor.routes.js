import { Router } from "express";
import { addingDoctordetails, viewDoctordetails, updateDoctordetails, deleteDoctordetails } from "../controllers/doctor.controller.js";

const router = Router()

router.route("/add").post(addingDoctordetails)
router.route("/view").get(viewDoctordetails)
router.route("/update").put(updateDoctordetails)
router.route("/delete").delete(deleteDoctordetails)

export default router