import React from 'react'

export default function SecondReferenceInfo({ page, setPage, formData, handleChange, handleSubmit, errors }) {

  return (
    <div className='form-inner-card '>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Reference Contact number"
          onChange={handleChange}
          name="second_reference_contact_number"
          value={formData.second_reference_contact_number}
          className='form-input'
        />

        {errors.second_reference_contact_number && <span className='error'>{errors.second_reference_contact_number}</span>}
        <br></br><br></br>
        <input
          type="text"
          placeholder="Reference First Name"
          onChange={handleChange}
          name="second_reference_first_name"
          value={formData.second_reference_first_name}
          className='form-input'
        />
        {errors.second_reference_first_name && <span className='error'>{errors.second_reference_first_name}</span>}
        <br></br><br></br>
        <input
          type="text"
          placeholder="Reference Last Name"
          onChange={handleChange}
          name="second_reference_last_name"
          value={formData.second_reference_last_name}
          className='form-input'
        />
        {errors.second_reference_last_name && <span className='error'>{errors.second_reference_last_name}</span>}
        <br></br><br></br>
        <input
          type="text"
          placeholder="Reference email address"
          onChange={handleChange}
          name="second_reference_email_address"
          value={formData.second_reference_email_address}
          className='form-input'
        />
        {errors.second_reference_email_address && <span className='error'>{errors.second_reference_email_address}</span>}
        <br></br><br></br>
        <input
          type="text"
          placeholder="Reference's Relationship"
          onChange={handleChange}
          name="second_reference_relationship"
          value={formData.second_reference_relationship}
          className='form-input'
        />
        {errors.second_reference_relationship && <span className='error'>{errors.second_reference_relationship}</span>}
        <br></br><br></br>
        <button className='ctn-btn'>Submit</button>
        <button
          onClick={() => {
            setPage(page - 1);
          }}>
          Previous
        </button>
      </form>
    </div>
  )
}