import React from 'react'

export default function PersonalInfo({ page, setPage, formData, handleChange, onImageChange }) {

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="first_name"
          value={formData.first_name}
          className='form-input'
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="last_name"
          value={formData.last_name}
          className='form-input'
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Position"
          onChange={handleChange}
          name="position"
          value={formData.position}
          className='form-input'
        /><br></br><br></br>
        <input
          type="date"
          placeholder="Start Date"
          onChange={handleChange}
          name="start_date"
          value={formData.start_date}
          className='form-input'
        /><br></br><br></br>
        <textarea
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={formData.address}
          className='form-input'
        /><br></br><br></br>
        <input
          type="date"
          placeholder="Date of birth"
          onChange={handleChange}
          name="date_of_birth"
          value={formData.date_of_birth}
          className='form-input'
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Email address"
          onChange={handleChange}
          name="email_address"
          value={formData.email_address}
          className='form-input'
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Contact number"
          onChange={handleChange}
          name="phone_number"
          value={formData.phone_number}
          className='form-input'
        /><br></br><br></br>
        <input
          type="file"
          name="attachment"
          accept="image/*"
          multiple={false}
          onChange={onImageChange}
          className='form-input'
        /><br></br><br></br>
        <button
          onClick={() => {
            setPage(page + 1);
          }}>
          Next
        </button>
      </form>
    </div>
  )
}
