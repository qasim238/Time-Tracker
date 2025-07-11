import React from 'react';

const TimeEntryList = ({ entries, onDelete }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry._id} className="flex justify-between items-center border-b py-2">
          <span>{entry.description} - {entry.duration} min</span>
          <button onClick={() => onDelete(entry._id)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TimeEntryList;
