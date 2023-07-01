import React from 'react'

function EmployeeForm() {

  const [formData, setFormData] = React.useState(
    {
      first_name: "",
      last_name: "",
      address: "",
      date_of_birth: "",
      position: "",
      start_date: "",
      email_address: "",
      phone_number: "",
      attachment: null
    }
  )

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(event)
    console.log(formData)
    const formData = new FormData();
    formData.append('employee[first_name]', event.target.first_name.value)
    formData.append('employee[last_name]', event.target.last_name.value)
    formData.append('employee[address]', event.target.address.value);
    formData.append('employee[date_of_birth]', event.target.date_of_birth.value);
    formData.append('employee[attachment]', event.target.attachment.files[0]);
    submitToApi(formData)
  }

  function submitToApi(formData) {
    fetch('http://localhost:3000/api/v1/employees', {
      method: 'POST',
      body: formData
    })
      .catch(error => console.log(error));

  }



  function onImageChange(event) {
    setFormData({ attachment: event.target.files[0] })
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="first_name"
        value={formData.first_name}
      /><br></br><br></br>
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="last_name"
        value={formData.last_name}
      /><br></br><br></br>
      <input
        type="text"
        placeholder="Position"
        onChange={handleChange}
        name="position"
        value={formData.position}
      /><br></br><br></br>
      <input
        type="date"
        placeholder="Start Date"
        onChange={handleChange}
        name="start_date"
        value={formData.start_date}
      /><br></br><br></br>
      <textarea
        type="text"
        placeholder="Address"
        onChange={handleChange}
        name="address"
        value={formData.address}
      /><br></br><br></br>
      <input
        type="date"
        placeholder="Date of birth"
        onChange={handleChange}
        name="date_of_birth"
        value={formData.date_of_birth}
      /><br></br><br></br>
      <input
        type="text"
        placeholder="Email address"
        onChange={handleChange}
        name="email_address"
        value={formData.email_address}
      /><br></br><br></br>
      <input
        type="text"
        placeholder="Contact number"
        onChange={handleChange}
        name="phone_number"
        value={formData.phone_number}
      /><br></br><br></br>
      <input
        type="file"
        name="attachment"
        accept="image/*"
        multiple={false}
        onChange={onImageChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default EmployeeForm
