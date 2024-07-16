import { Router } from "express";
import { loginAdmin, registerAdmin } from "../controllers/admin.controller.js";

const router = Router()

router.route("/registeradmin").post(registerAdmin)
router.route("/loginadmin").post(loginAdmin)

export default router