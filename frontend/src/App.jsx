import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimeEntryForm from './components/TimeEntryForm.jsx';
import TimeEntryList from './components/TimeEntryList.jsx';

const App = () => {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    const res = await axios.get('http://localhost:5000/api/time');
    setEntries(res.data);
  };

  const addEntry = async (entry) => {
    const res = await axios.post('http://localhost:5000/api/time', entry);
    setEntries([res.data, ...entries]);
  };

  const deleteEntry = async (id) => {
    await axios.delete(`http://localhost:5000/api/time/${id}`);
    setEntries(entries.filter((e) => e._id !== id));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Time Tracker</h1>
      <TimeEntryForm onAdd={addEntry} />
      <TimeEntryList entries={entries} onDelete={deleteEntry} />
    </div>
  );
};

export default App;
