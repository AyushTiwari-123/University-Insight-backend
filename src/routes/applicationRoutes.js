import express from 'express';
import { protect, authorize } from '../middleware/authMiddleware.js';
import {
  createApplication,
  getAllApplications,
  getStudentApplications,
  updateApplicationStatus,
  deleteApplication,
} from '../controllers/applicationController.js';

const router = express.Router();

// Routes
router.post('/', protect, authorize('student'), createApplication);
router.get('/', protect, authorize('admin', 'agent'), getAllApplications);
router.get('/my-applications', protect, authorize('student'), getStudentApplications);
router.put('/:id', protect, authorize('admin', 'agent'), updateApplicationStatus);
router.delete('/:id', protect, authorize('admin'), deleteApplication);

export default router;
