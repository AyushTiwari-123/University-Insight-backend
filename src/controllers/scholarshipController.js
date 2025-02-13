import Scholarship from '../models/Scholarship.js';

// Create a new scholarship (Admin)
export const createScholarship = async (req, res) => {
  try {
    const { title, description, eligibility, deadline } = req.body;
    const scholarship = await Scholarship.create({ title, description, eligibility, deadline });

    res.status(201).json(scholarship);
  } catch (error) {
    res.status(500).json({ message: 'Error creating scholarship', error });
  }
};

// Get all scholarships
export const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scholarships', error });
  }
};

// Get a specific scholarship
export const getScholarshipById = async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Scholarship not found' });

    res.json(scholarship);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scholarship', error });
  }
};

// Update a scholarship (Admin)
export const updateScholarship = async (req, res) => {
  try {
    const scholarship = await Scholarship.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!scholarship) return res.status(404).json({ message: 'Scholarship not found' });

    res.json(scholarship);
  } catch (error) {
    res.status(500).json({ message: 'Error updating scholarship', error });
  }
};

// Delete a scholarship (Admin)
export const deleteScholarship = async (req, res) => {
  try {
    const scholarship = await Scholarship.findByIdAndDelete(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Scholarship not found' });

    res.json({ message: 'Scholarship deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting scholarship', error });
  }
};
