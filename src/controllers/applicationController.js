import Application from '../models/Application.js';

// Create a new application
export const createApplication = async (req, res) => {
  try {
    const { program } = req.body;
    const studentId = req.user._id; // Get student ID from JWT token

    const application = await Application.create({ studentId, program });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error creating application', error });
  }
};

// Get all applications (Admin & Agent)
export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('studentId', 'name email');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error });
  }
};

// Get applications for a specific student
export const getStudentApplications = async (req, res) => {
  try {
    const applications = await Application.find({ studentId: req.user._id });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error });
  }
};

// Update application status (Admin & Agent)
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findById(req.params.id);

    if (!application) return res.status(404).json({ message: 'Application not found' });

    application.status = status;
    await application.save();
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application', error });
  }
};

// Delete application (Admin)
export const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ message: 'Application not found' });

    res.json({ message: 'Application deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting application', error });
  }
};
