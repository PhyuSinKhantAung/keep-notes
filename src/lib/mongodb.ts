import mongoose from "mongoose";

// Define the type for the connection object
interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDB = async (): Promise<void> => {
  try {
    // Check if we are already connected
    if (connection.isConnected) {
      return;
    }

    // Connect to the MongoDB database
    const db = await mongoose.connect(process.env.MONGO as string);

    // Update the connection status
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    // Log and rethrow the error
    console.error(error);
    throw new Error(`Failed to connect to DB: ${(error as Error).message}`);
  }
};
