import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

const UserData = mongoose.model("User", userSchema);
export default UserData;
