import React from 'react'
import { useNavigate } from 'react-router-dom'
import PersonalInfo from './PersonalInfo'
import ReferenceInfo from './ReferenceInfo'

function EmployeeForm() {

  const [page, setPage] = React.useState(0)

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
      attachment: null,
      reference_first_name: "",
      reference_last_name: "",
      reference_email_address: "",
      reference_contact_number: ""
    }
  )

  const componentList = [
    <PersonalInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      handleChange={handleChange}
      onImageChange={onImageChange}
    />,
    <ReferenceInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      handleChange={handleChange}
      handleSubmit={(e) => handleSubmit(e, formData)}
    />
  ]

  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event, data) {
    console.log(event, data)
    event.preventDefault()
    const formData = new FormData()
    const ReferenceFormData = new FormData()
    formData.append('employee[first_name]', data.first_name)
    formData.append('employee[last_name]', data.last_name)
    formData.append('employee[address]', data.address);
    formData.append('employee[date_of_birth]', data.date_of_birth)
    formData.append('employee[position]', data.position)
    formData.append('employee[start_date]', data.start_date)
    formData.append('employee[phone_number]', data.phone_number)
    formData.append('employee[email_address]', data.email_address)
    formData.append('employee[attachment]', data.attachment)
    ReferenceFormData.append('reference[first_name]', event.target.reference_first_name.value)
    ReferenceFormData.append('reference[last_name]', event.target.reference_last_name.value)
    ReferenceFormData.append('reference[email_address]', event.target.reference_email_address.value)
    ReferenceFormData.append('reference[contact_number]', event.target.reference_contact_number.value)
    submitToApi(formData, ReferenceFormData)
    navigate('/')
  }

  function submitToApi(formData, ReferenceFormData) {
    fetch('http://localhost:3000/api/v1/employees', {
      method: 'POST',
      body: formData
    }).then((response) => response.json())
      .then((employeeResponse) => {

        const employeeId = employeeResponse.id
        ReferenceFormData.append('reference[employee_id]', employeeId)

        fetch('http://localhost:3000/api/v1/references', {
          method: 'POST',
          body: ReferenceFormData
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))

  }



  function onImageChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData, attachment: event.target.files[0]
      }
    })
  }


  return (
    <div className='form-card'>
      {componentList[page]}
    </div>
  )
}

export default EmployeeForm
