import React from 'react'


function ReferenceInfo({ page, setPage, formData, handleChange, setErrors, errors, validateForm }) {
  // return (
  //   <div className='form-inner-card '>
  //     <form  >
  //       <input
  //         type="text"
  //         placeholder="Reference Contact number"
  //         onChange={handleChange}
  //         name="reference_contact_number"
  //         value={formData.reference_contact_number}
  //         className='form-input'
  //       />
  //       {errors.reference_contact_number && <span className='error'>{errors.reference_contact_number}</span>}
  //       <br></br><br></br>
  //       <input
  //         type="text"
  //         placeholder="Reference First Name"
  //         onChange={handleChange}
  //         name="reference_first_name"
  //         value={formData.reference_first_name}
  //         className='form-input'
  //       />
  //       {errors.reference_first_name && <span className='error'>{errors.reference_first_name}</span>}
  //       <br></br><br></br>
  //       <input
  //         type="text"
  //         placeholder="Reference Last Name"
  //         onChange={handleChange}
  //         name="reference_last_name"
  //         value={formData.reference_last_name}
  //         className='form-input'
  //       />
  //       {errors.reference_last_name && <span className='error'>{errors.reference_last_name}</span>}
  //       <br></br><br></br>
  //       <input
  //         type="text"
  //         placeholder="Reference email address"
  //         onChange={handleChange}
  //         name="reference_email_address"
  //         value={formData.reference_email_address}
  //         className='form-input'
  //       />
  //       {errors.reference_email_address && <span className='error'>{errors.reference_email_address}</span>}
  //       <br></br><br></br>
  //       <input
  //         type="text"
  //         placeholder="Reference's Relationship"
  //         onChange={handleChange}
  //         name="reference_relationship"
  //         value={formData.reference_relationship}
  //         className='form-input'
  //       />
  //       {errors.reference_relationship && <span className='error'>{errors.reference_relationship}</span>}
  //       <br></br><br></br>
  //       <button
  //         className='ctn-btn'
  //         onClick={(e) => {
  //           e.preventDefault()
  //           if (validateForm(setErrors, formData)) {
  //             console.log("True")
  //             setPage(page + 1)
  //           } else {
  //             console.log(errors)
  //           }
  //         }}>
  //         Continue
  //       </button>
  //       <button
  //         onClick={() => {
  //           setPage(page - 1);
  //         }}>
  //         Previous
  //       </button>
  //     </form>
  //   </div>
  // )
  return (
    <div className='form-inner-card '>
      <form  >
        <button
          className='prev-btn'
          onClick={() => {
            setPage(page - 1);
          }}>
          Back
        </button>
        <label className='label'>First Name</label>
        <input
          type="text"
          placeholder="Reference First Name"
          onChange={handleChange}
          name="reference_first_name"
          value={formData.reference_first_name}
          className='form-input'
        />
        {errors.reference_first_name && <span className='error'>{errors.reference_first_name}</span>}
        <br></br><br></br>
        <label className='label'>Last Name</label>
        <input
          type="text"
          placeholder="Reference Last Name"
          onChange={handleChange}
          name="reference_last_name"
          value={formData.reference_last_name}
          className='form-input'
        />
        {errors.reference_last_name && <span className='error'>{errors.reference_last_name}</span>}
        <br></br><br></br>
        <label className='label'>Contact number</label>
        <input
          type="text"
          placeholder="Reference Contact number"
          onChange={handleChange}
          name="reference_contact_number"
          value={formData.reference_contact_number}
          className='form-input'
        />
        {errors.reference_contact_number && <span className='error'>{errors.reference_contact_number}</span>}
        <br></br><br></br>
        <label className='label'>Email address</label>
        <input
          type="text"
          placeholder="Reference email address"
          onChange={handleChange}
          name="reference_email_address"
          value={formData.reference_email_address}
          className='form-input'
        />
        {errors.reference_email_address && <span className='error'>{errors.reference_email_address}</span>}
        <br></br><br></br>
        <label className='label'>Reference's relationship</label>
        <input
          type="text"
          placeholder="Reference's Relationship"
          onChange={handleChange}
          name="reference_relationship"
          value={formData.reference_relationship}
          className='form-input'
        />
        {errors.reference_relationship && <span className='error'>{errors.reference_relationship}</span>}
        <br></br><br></br>
        <button
          className='ctn-btn'
          onClick={(e) => {
            e.preventDefault()
            if (validateForm(setErrors, formData)) {
              console.log("True")
              setPage(page + 1)
            } else {
              console.log(errors)
            }
          }}>
          Continue
        </button>
      </form>
    </div>
  )
}

export default ReferenceInfo
