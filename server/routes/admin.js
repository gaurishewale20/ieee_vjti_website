import express from "express";
import {signin} from "../controllers/signin.js";


const router = express.Router();

// on signing in, the signin controller is called.
router.post("/signin", signin);

export default router;
