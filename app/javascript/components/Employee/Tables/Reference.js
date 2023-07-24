import React from 'react'

export default function Reference(props) {
  const { contact_number, email_address, first_name, last_name, relationship } = props
  return (
    <table className="table-responsive cf">
      <colgroup>
        <col style={{ width: '25%' }} />
        <col style={{ width: '25%' }} />
        <col style={{ width: '25%' }} />
        <col style={{ width: '25%' }} />
      </colgroup>
      <thead className="cf">
        <tr>
          <th scope="col">Reference First Name</th>
          <th scope="col">Reference Last Name</th>
          <th scope="col">Email address</th>
          <th scope="col">Contact number</th>
          <th scope="col">Relationship</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email_address}</td>
          <td>{contact_number}</td>
          <td>{relationship}</td>
        </tr>
      </tbody>
    </table>
  )
}
