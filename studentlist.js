// StudentList.js
import React from 'react';

function StudentList({ students, onAttendanceChange }) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name}
          <input
            type="checkbox"
            checked={student.attendance}
            onChange={() => onAttendanceChange(student.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
