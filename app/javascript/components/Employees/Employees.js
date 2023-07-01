import React, { useState, useEffect } from 'react'
import Employee from './Employee'


function Employees() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('/api/v1/employees.json')
      .then((res) => res.json())
      .then(json => setEmployees(json.data))
      .catch(error => console.log(error))
  }, [employees.length])

  console.log(employees)

  const List = employees.map((item) => {
    return <Employee
      first_name={item.attributes.first_name}
      last_name={item.attributes.last_name}
      address={item.attributes.address}
      date={item.attributes.date_of_birth}
      url={item.attributes.attachment.url}
      key={item.attributes.id}
    />
  })
  return (
    <div>
      <h1>Welcome to 363 Employees Page</h1><br></br>
      <ul>
        {List}
      </ul>
    </div>
  )
}

export default Employees
