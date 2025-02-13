import express from 'express';
import { protect, authorize } from '../middleware/authMiddleware.js';
import {
  createScholarship,
  getAllScholarships,
  getScholarshipById,
  updateScholarship,
  deleteScholarship,
} from '../controllers/scholarshipController.js';

const router = express.Router();

// Routes
router.post('/', protect, authorize('admin'), createScholarship);
router.get('/', getAllScholarships);
router.get('/:id', getScholarshipById);
router.put('/:id', protect, authorize('admin'), updateScholarship);
router.delete('/:id', protect, authorize('admin'), deleteScholarship);

export default router;
