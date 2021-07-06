import express from "express";
const router = express.Router();
import {signin} from "../controllers/signin.js";

// on signing in, the signin controller is called.
router.post("/signin", signin);

export default router;
