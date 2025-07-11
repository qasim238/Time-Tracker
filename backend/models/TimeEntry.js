import mongoose from 'mongoose';

const timeEntrySchema = new mongoose.Schema({
    description: String,
    duration: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('TimeEntry', timeEntrySchema);
