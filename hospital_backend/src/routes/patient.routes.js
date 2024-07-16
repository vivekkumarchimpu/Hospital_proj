import { Router } from "express";

import { registerPatient, viewPatient, deletePatient } from "../controllers/patient.controller.js";


const router = Router()

router.route("/add").post(registerPatient)
router.route("/view").get(viewPatient)
router.route("/view").delete(deletePatient)


export default router;