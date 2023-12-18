// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
const UserList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/students/${studentId}`);
      // Puedes manejar la respuesta aquí (por ejemplo, actualizar la lista de estudiantes)
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {students.map(student => (
          <li key={student.studentId}>
            {`${student.studentId} -- ${student.firstName} ${student.lastName} - ${student.email}`}
            <button onClick={() => handleDelete(student.studentId)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
