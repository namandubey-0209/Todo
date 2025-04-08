import mongoose from 'mongoose';

const connectDbB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ID);
        console.log("MongoDB connected")
    } catch (error) {
        
    }
}
