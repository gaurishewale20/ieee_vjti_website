import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

});


export default mongoose.model('Admin', adminSchema);




// let Admin ={
//   password: '$2y$12$PZwkG/GiKapc.gZomg8F1u5l/7TXfQmV7RSQ8DDKZZ3/ZFvqPnG.W',
//   email: 'wadher.meera@gmail.com'

// }

// export default Admin;