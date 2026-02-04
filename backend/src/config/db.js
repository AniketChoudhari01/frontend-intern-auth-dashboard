import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connected");
  } catch (error) {
    console.log("MONGO_URI:", process.env.MONGO_URI);

    console.error("DB error: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
