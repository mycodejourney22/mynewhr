import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Employees from './Employees/Employees'
import Employee from './Employee/Employee'
import EmployeeForm from './EmployeeForm/EmployeeForm'
import './App.css'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Employees />} />
      <Route exact path='/employees/:id' element={<Employee />} />
      <Route exact path='/employees/new' element={<EmployeeForm />} />
    </Routes>)
}

export default App
