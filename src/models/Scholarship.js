import mongoose from 'mongoose';

const scholarshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  eligibility: { type: String, required: true },
  deadline: { type: Date, required: true },
}, { timestamps: true });

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);
export default Scholarship;
