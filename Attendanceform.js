// AttendanceForm.js
import React, { useState } from 'react';

function AttendanceForm({ onSubmit }) {
  const [date, setDate] = useState('');
  
  const handleSubmit = () => {
    // Validate date and handle form submission
    if (date.trim() === '') {
      // Show an error message
      return;
    }
    onSubmit(date);
  };

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Attendance</button>
    </div>
  );
}

export default AttendanceForm;
