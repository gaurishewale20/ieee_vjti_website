import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  email: String,
  password: String, 
  id:String
})

var AdminModel = mongoose.model("Admin", adminSchema,'admin');
 
export default AdminModel;



// let Admin ={
//   password: '$2y$12$PZwkG/GiKapc.gZomg8F1u5l/7TXfQmV7RSQ8DDKZZ3/ZFvqPnG.W',
//   email: 'wadher.meera@gmail.com'

// }

// export default Admin;
