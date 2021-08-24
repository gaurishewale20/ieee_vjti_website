import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import AdminModel from "../models/Admin.js";
const secret = 'test';

const router = express.Router();



export const signin = async(req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);

    try {

        const oldUser = await AdminModel.findOne({ email });

        // console.log(oldUser);
        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
        // if (!oldUser) console.log('User does not exist.');
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export default router;