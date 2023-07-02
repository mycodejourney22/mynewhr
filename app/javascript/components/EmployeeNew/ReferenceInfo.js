import React from 'react'


function ReferenceInfo({ page, setPage, formData, handleChange, handleSubmit }) {
  console.log(formData)
  return (
    <div>ReferenceInfo
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Reference Contact number"
          onChange={handleChange}
          name="reference_contact_number"
          value={formData.reference_contact_number}
          className='form-input'
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Reference First Name"
          onChange={handleChange}
          name="reference_first_name"
          value={formData.reference_first_name}
          className='form-input'
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Reference Last Name"
          onChange={handleChange}
          name="reference_last_name"
          value={formData.reference_last_name}
          className='form-input'
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Reference email address"
          onChange={handleChange}
          name="reference_email_address"
          value={formData.reference_email_address}
          className='form-input'
        /><br></br><br></br>
        <button>Submit</button>
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

export default ReferenceInfo
