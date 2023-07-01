import React from 'react'

function Employee(props) {
  return (<div>
    <img src={props.url} alt={props.url} />
    <p>First Name: {props.first_name}</p>
    <p>Last Name: {props.last_name}</p>
    <p>Date of birth: {props.date}</p>
    <br></br>
  </div>)
}

export default Employee
