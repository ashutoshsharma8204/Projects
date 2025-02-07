import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);
  const [newStudent, setNewStudent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudentIndex, setCurrentStudentIndex] = useState(null);
  const [currentStudentName, setCurrentStudentName] = useState("");

  const addStudent = () => {
    if (newStudent.trim()) {
      setStudents([...students, newStudent]);
      setNewStudent("");
    }
  };

  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setCurrentStudentIndex(index);
    setCurrentStudentName(students[index]);
  };

  const editStudent = () => {
    if (currentStudentName.trim()) {
      const updatedStudents = students.map((student, index) =>
        index === currentStudentIndex ? currentStudentName : student
      );
      setStudents(updatedStudents);
      setIsEditing(false);
      setCurrentStudentIndex(null);
      setCurrentStudentName("");
    }
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <input
        type="text"
        placeholder="Enter student name..."
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}{" "}
            <button onClick={() => removeStudent(index)}>Remove</button>
            <button onClick={() => startEditing(index)}>Edit</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div>
          <input
            type="text"
            placeholder="Edit student name..."
            value={currentStudentName}
            onChange={(e) => setCurrentStudentName(e.target.value)}
          />
          <button onClick={editStudent}>Save</button>
        </div>
      )}
    </div>
  );
};

export default App;
