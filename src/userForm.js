// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './UseForm.css'
const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/v1/students', {
        firstName,
        lastName,
        email,
        studentId
      });

      // Puedes manejar la respuesta aquí (por ejemplo, actualizar la lista de estudiantes)
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
        <br></br>
          StudentID:
          <input type="number" value={studentId} onChange={handleIdChange} />
        </label>
        <br />
        <button type="submit">Crear Estudiante</button>
      </form>
    </div>
  );
};

export default UserForm;
