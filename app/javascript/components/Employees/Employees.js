import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Employee from './Employee'


function Employees() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('/api/v1/employees.json')
      .then((res) => res.json())
      .then(json => setEmployees(json.data))
      .catch(error => console.log(error))
  }, [employees.length])


  const List = employees.map((item) => {
    return <Employee
      firstName={item.attributes.first_name}
      lastName={item.attributes.last_name}
      address={item.attributes.address}
      date={item.attributes.date_of_birth}
      url={item.attributes.attachment.url}
      startDate={item.attributes.start_date}
      position={item.attributes.position}
      emailAddress={item.attributes.email_address}
      phoneNumber={item.attributes.phone_number}
      active={item.attributes.active}

      key={item.attributes.id}
    />
  })
  return (
    <div>
      <div className='main-header'>
        <div className='flex-card'>
          <h1>Employees</h1>
          <Link to='/employees/new' className='btn bold'><i class="fa-solid fa-plus pr"></i> Add Employee</Link>
        </div>
      </div>
      <div className='employee-card-section'>
        <ul className='grid-card'>
          {List}
        </ul>
      </div>
    </div>
  )
}

export default Employees
