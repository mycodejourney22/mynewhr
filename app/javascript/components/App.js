import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Employees from './Employees/Employees'
import Employee from './Employee/Employee'
import EmployeeNew from './EmployeeNew/EmployeeNew'
import '../css/App.css'
import EmployeeUpdate from './EmployeeUpdate/EmployeeUpdate'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Employees />} />
      <Route exact path='/employees/:id' element={<Employee />} />
      <Route exact path='/employees/new' element={<EmployeeNew />} />
      <Route exact path='/employees/:id/edit' element={<EmployeeUpdate />} />
    </Routes>)
}

export default App
