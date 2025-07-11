import express from 'express';
import { getAllTimeEntries, createTimeEntry, deleteTimeEntry } from '../controllers/timeController.js';

const router = express.Router();

router.get('/', getAllTimeEntries);
router.post('/', createTimeEntry);
router.delete('/:id', deleteTimeEntry);

export default router;
