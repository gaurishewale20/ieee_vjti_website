import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from '../models/admin.js';
// const user = require('../../models/admin.js');
const secret = 'test';


const token = jwt.sign( { email: "ieeevjtiofficial@gmail.com"}, secret, { expiresIn: "1h" } );


export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
 
  try {
    // if(email === Admin.email) { 
    //   console.log("User is found!")
    //   const isPasswordCorrect = await bcrypt.compare(password, Admin.password);
    //   if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    //   const token = jwt.sign({ email: Admin.email }, secret, { expiresIn: "1h" });

    //   res.status(200).json({ result: Admin, token });
    // }
    const oldUser = await Admin.findOne({ email });
    console.log(oldUser);
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    // if (!oldUser) console.log('User does not exist.');
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};