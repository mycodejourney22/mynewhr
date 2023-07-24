import React from 'react'

export default function Position(props) {
  const { start_date, end_date, position } = props
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
          <th scope="col">Position</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{position}</td>
          <td>{start_date}</td>
          <td>{end_date}</td>
          <td>Ikeja</td>
        </tr>
      </tbody>
    </table>
  )
}
