import mongoose from 'mongoose';

const connectDbB = async () => {
    try {
        await mongoose.connect(pro)
    } catch (error) {
        
    }
}
