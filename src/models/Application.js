import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  program: { type: String, required: true },
  status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' },
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
export default Application;
