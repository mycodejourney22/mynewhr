import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Delete from './Delete'
import Personal from './Tables/Personal'
import Position from './Tables/Position'
import Reference from './Tables/Reference'

function Employee() {
  const [employee, setEmployee] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/v1/employees/${id}.json`)
      .then((res) => res.json())
      .then(data => setEmployee(data))
  }, [1])
  console.log(employee)

  if (employee === null) {
    return <div>Loading...</div>;
  }

  const { first_name, last_name, phone_number, email_address, date_of_birth, address, start_date, active, position, end_date } = employee.employee

  const reference = employee.references.map((reference) => {
    return <Reference
      first_name={reference.first_name}
      last_name={reference.last_name}
      relationship={reference.relationship}
      email_address={reference.email_address}
      contact_number={reference.contact_number}
      key={reference.id}
    />
  })


  return (
    <div>
      {/* <div className='main-header'> */}
      {/* </div> */}
      <div className='employee-card-section show-card'>
        <div className='flex-card top-padding'>
          <Link to='/' className='logo'>Employees</Link>
          {/* < Delete id={id} /> */}
          <Link className='btn' to={`/employees/${id}/edit`}>Edit Employee</Link>
        </div>
        <div className='show-page show-padding'>
          <div className='flex align-center space-between'>
            <img className='show-avatar' src={employee.employee.attachment.url} alt='profile-picture' />
            <div className='show-heading-card '>
              <p className='show-heading-p bold show-heading-p-font'>{first_name} {last_name}</p>
              <p className='show-heading-p'>Email: {email_address}</p>
              <p className='show-heading-p'>Tel: {phone_number}</p>
              <p className='show-heading-p'>Address: {address}</p>
            </div>
          </div>
          < Personal
            first_name={first_name}
            last_name={last_name}
            phone_number={phone_number}
            email_address={email_address}
            date_of_birth={date_of_birth}
            active={active}
          />
          <Position
            position={position}
            start_date={start_date}
            end_date={end_date}
          />
          {reference}
        </div>
      </div>
    </div>
  )
}

export default Employee
