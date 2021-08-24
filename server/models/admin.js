import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    email: String,
    password: String,
    id: String
})

var AdminModel = mongoose.model("Admin", adminSchema, 'admin');

export default AdminModel;