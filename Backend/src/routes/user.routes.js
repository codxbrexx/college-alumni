import { Router } from "express";

const router = Router();

router.route("/register").post();
router.route("/login").post();
router.route("/forgot").post();
router.route("/createpassword").post();

export default router;