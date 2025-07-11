import React, { useState } from 'react';

const TimeEntryForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ description, duration: Number(duration) });
    setDescription('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Description"
        className="border p-2 mr-2 w-1/2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (min)"
        className="border p-2 mr-2 w-1/4"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
    </form>
  );
};

export default TimeEntryForm;
