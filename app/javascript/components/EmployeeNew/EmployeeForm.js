import React from 'react'
import { useNavigate } from 'react-router-dom'
import PersonalInfo from './PersonalInfo'
import ReferenceInfo from './ReferenceInfo'
import SecondReferenceInfo from './SecondReferenceInfo'
import { validateForm } from '../Utility/Errors'
import { validateRefForm } from '../Utility/Errors'
import { validateSecRefForm } from '../Utility/Errors'

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
      reference_contact_number: "",
      reference_relationship: "",
      second_reference_first_name: "",
      second_reference_last_name: "",
      second_reference_contact_number: "",
      second_reference_email_address: "",
      second_reference_relationship: ""
    }
  )

  const [errors, setErrors] = React.useState({})



  const componentList = [
    <PersonalInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      handleChange={handleChange}
      onImageChange={onImageChange}
      errors={errors}
      setErrors={setErrors}
      validateForm={validateForm}
    />,
    <ReferenceInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      handleChange={handleChange}
      errors={errors}
      setErrors={setErrors}
      validateForm={validateRefForm}
    // handleSubmit={(e) => handleSubmit(e, formData)}
    />,
    <SecondReferenceInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      handleChange={handleChange}
      errors={errors}
      setErrors={setErrors}
      handleSubmit={(e) => handleSubmit(e, formData, setErrors)}
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

  function handleSubmit(event, data, setErrors) {
    event.preventDefault()
    if (validateSecRefForm(setErrors, data)) {
      const formData = new FormData()
      const ReferenceFormData = new FormData()
      const SecondReferenceFormData = new FormData()
      formData.append('employee[first_name]', data.first_name)
      formData.append('employee[last_name]', data.last_name)
      formData.append('employee[address]', data.address)
      formData.append('employee[date_of_birth]', data.date_of_birth)
      formData.append('employee[position]', data.position)
      formData.append('employee[start_date]', data.start_date)
      formData.append('employee[phone_number]', data.phone_number)
      formData.append('employee[email_address]', data.email_address)
      formData.append('employee[attachment]', data.attachment)
      ReferenceFormData.append('reference[first_name]', data.reference_first_name)
      ReferenceFormData.append('reference[last_name]', data.reference_last_name)
      ReferenceFormData.append('reference[email_address]', data.reference_email_address)
      ReferenceFormData.append('reference[contact_number]', data.reference_contact_number)
      ReferenceFormData.append('reference[relationship]', data.reference_relationship)
      SecondReferenceFormData.append('reference[first_name]', event.target.second_reference_first_name.value)
      SecondReferenceFormData.append('reference[last_name]', event.target.second_reference_last_name.value)
      SecondReferenceFormData.append('reference[email_address]', event.target.second_reference_email_address.value)
      SecondReferenceFormData.append('reference[contact_number]', event.target.second_reference_contact_number.value)
      SecondReferenceFormData.append('reference[relationship]', event.target.second_reference_relationship.value)

      submitToApi(formData, ReferenceFormData, SecondReferenceFormData)
      navigate('/')
    }
    else {
      console.log(errors)
    }
  }

  function submitToApi(formData, ReferenceFormData, SecondReferenceFormData) {
    fetch('http://localhost:3000/api/v1/employees', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((employeeResponse) => {
        const employeeId = employeeResponse.id;
        ReferenceFormData.append('reference[employee_id]', employeeId);
        SecondReferenceFormData.append('reference[employee_id]', employeeId);

        fetch('http://localhost:3000/api/v1/references', {
          method: 'POST',
          body: ReferenceFormData
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));

        fetch('http://localhost:3000/api/v1/references', {
          method: 'POST',
          body: SecondReferenceFormData
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
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
      {page === 0 ? (
        <h1 className='form-header'>Personal Information</h1>
      ) : page === 1 ? (
        <h1 className='form-header'>First Referee Information</h1>
      ) : page === 2 ? (
        <h1 className='form-header'>Second Referee Information</h1>
      ) : null}
      {componentList[page]}
    </div>
  )
}

export default EmployeeForm
