import React from 'react'

function Employee(props) {
  return (<div className='Card'>
    <img src={props.url} alt={props.url} className='profile-image' />
    <p>{props.first_name} {props.last_name}</p>
    <p>Date of birth: {props.date}</p>
    <br></br>
  </div>)
}

export default Employee
