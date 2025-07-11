import TimeEntry from '../models/TimeEntry.js';

export const getAllTimeEntries = async (req, res) => {
    const entries = await TimeEntry.find().sort({ createdAt: -1 });
    res.json(entries);
};

export const createTimeEntry = async (req, res) => {
    const { description, duration } = req.body;
    const entry = new TimeEntry({ description, duration });
    await entry.save();
    res.status(201).json(entry);
};

export const deleteTimeEntry = async (req, res) => {
    const { id } = req.params;
    await TimeEntry.findByIdAndDelete(id);
    res.status(204).send();
};
