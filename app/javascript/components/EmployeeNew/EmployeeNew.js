import React from 'react'

import EmployeeForm from './EmployeeForm'



function EmployeeNew() {
  return (
    <div className='wrapper'>
      <div className='main-header'>
        <div className='flex-card'>
          <h1>Employees</h1>
        </div>
      </div>
      <EmployeeForm />
    </div>
  )
}

export default EmployeeNew
