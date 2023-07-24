import React from 'react'

export default function Personal(props) {
  const { first_name, last_name, email_address, date_of_birth, active, phone_number } = props
  return (
    <table className="table-responsive cf">
      <colgroup>
        <col style={{ width: '20%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '20%' }} />
      </colgroup>
      <thead className="cf">
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Date of birth</th>
          <th scope="col">Status</th>
          <th scope="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email_address}</td>
          <td>{date_of_birth}</td>
          <td>{active ? "Active" : "Inactive"}</td>
          <td>{phone_number}</td>
        </tr>
      </tbody>
    </table>
  )
}
