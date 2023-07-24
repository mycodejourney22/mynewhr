import React from 'react'

export default function PersonalInfo({ page, setPage, formData, handleChange, onImageChange, setErrors, errors, validateForm }) {

  return (
    <div className='form-inner-card'>
      <form>
        <label className='label'>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="first_name"
          value={formData.first_name}
          className='form-input'
        />
        {errors.first_name && <span className='error'>{errors.first_name}</span>}
        <br></br><br></br>
        <label className='label'>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="last_name"
          value={formData.last_name}
          className='form-input'
        />
        {errors.last_name && <span className='error'>{errors.last_name}</span>}
        <br></br><br></br>
        <label className='label'>Position</label>
        <input
          type="text"
          placeholder="Position"
          onChange={handleChange}
          name="position"
          value={formData.position}
          className='form-input'
        />
        {errors.position && <span className='error'>{errors.position}</span>}
        <br></br><br></br>
        <label className='label'>Start Date</label>
        <input
          type="date"
          placeholder="Start Date"
          onChange={handleChange}
          name="start_date"
          value={formData.start_date}
          className='form-input'
        />
        {errors.start_date && <span className='error'>{errors.start_date}</span>}
        <br></br><br></br>
        <label className='label'>Address</label>
        <textarea
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={formData.address}
          className='form-input'
        /><br></br><br></br>
        <label className='label'>Date of birth</label>
        <input
          type="date"
          placeholder="Date of birth"
          onChange={handleChange}
          name="date_of_birth"
          value={formData.date_of_birth}
          className='form-input'
        />
        {errors.date_of_birth && <span className='error'>{errors.date_of_birth}</span>}
        <br></br><br></br>
        <label className='label'>Email address</label>
        <input
          type="text"
          placeholder="Email address"
          onChange={handleChange}
          name="email_address"
          value={formData.email_address}
          className='form-input'
        />
        {errors.email && <span className='error'>{errors.email}</span>}
        <br></br><br></br>
        <label className='label'>Contact number</label>
        <input
          type="text"
          placeholder="Contact number"
          onChange={handleChange}
          name="phone_number"
          value={formData.phone_number}
          className='form-input'
        />
        {errors.phone_number && <span className='error'>{errors.phone_number}</span>}
        <br></br><br></br>
        <label className='label'>Profile picture</label>
        <input
          type="file"
          name="attachment"
          accept="image/*"
          multiple={false}
          onChange={onImageChange}
          className='form-input'
        /><br></br><br></br>
        <button className='ctn-btn'
          onClick={(e) => {
            e.preventDefault()
            if (validateForm(setErrors, formData)) {
              console.log("True")
              setPage(page + 1)
            } else {
              console.log(errors)
              setPage(page)
            }
          }}>
          Next
        </button>
      </form>
    </div>
  )
}
