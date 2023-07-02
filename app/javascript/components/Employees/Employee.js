import React from 'react'

function Employee(props) {
  return (<div className='Card'>
    <img src={props.url} alt={props.url} className='profile-image' />
    <p className='employee_name'>{props.firstName} {props.lastName}</p>
    <p className='position'>{props.position}</p>
    <p className='active'>{props.active ? "ACTIVE" : "INACTIVE"}</p>
    <div className='contact-card'>
      <p><i class="fa-regular fa-envelope pr"></i> {props.emailAddress}</p>
      <p className='pt-1'><i class="fa-solid fa-mobile pr"></i> {props.phoneNumber}</p>
    </div>
    <div className='employee_more_info'>
      <div className='flex-card'>
        <p>Department</p>
        <p className='bold'>Creative</p>
      </div>
      <div className='flex-card'>
        <p>Date of joining</p>
        <p className='bold'>{props.startDate}</p>
      </div>
    </div>
    <br></br>
  </div>)
}

export default Employee
