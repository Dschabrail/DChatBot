import { connect } from "mongoose";
import { disconnect } from "process";

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error("Cannot conect to MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    throw new Error("Cannot conect to MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
