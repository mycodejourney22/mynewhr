import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PersonalInfo from './PersonalInfo'
import ReferenceInfo from './ReferenceInfo'
import SecondReferenceInfo from './SecondReferenceInfo'
import { validateForm } from '../Utility/Errors'
import { validateRefForm } from '../Utility/Errors'
import { validateSecRefForm } from '../Utility/Errors'


export default function EmployeeEdit() {
  const { id } = useParams()
  console.log(id)

  const [data, setData] = useState(null)
  const [formData, setFormData] = useState(null)
  const [page, setPage] = useState(0)
  const [errors, setErrors] = React.useState({})
  const [refId, setRefId] = React.useState(
    {
      first_id: 0,
      second_id: 0
    }
  )


  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/employees/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [id])


  useEffect(() => {
    if (data) {
      // Extracting the required properties when data is available
      const {
        first_name,
        last_name,
        address,
        date_of_birth,
        position,
        start_date,
        email_address,
        phone_number,
        attachment,
      } = data.employee

      const {
        first_name: reference_first_name,
        last_name: reference_last_name,
        email_address: reference_email_address,
        contact_number: reference_contact_number,
        relationship: reference_relationship,
        id: first_reference_id
      } = data.references[0]

      const {
        first_name: second_reference_first_name,
        last_name: second_reference_last_name,
        email_address: second_reference_email_address,
        contact_number: second_reference_contact_number,
        relationship: second_reference_relationship,
        id: second_reference_id
      } = data.references[1] || {
        second_reference_first_name: "",
        second_reference_last_name: "",
        second_reference_contact_number: "",
        second_reference_email_address: "",
        second_reference_relationship: ""
      }

      // Forming the new object
      const formData = {
        first_name,
        last_name,
        address,
        date_of_birth,
        position,
        start_date,
        email_address,
        phone_number,
        attachment: attachment?.url || null,
        reference_first_name,
        reference_last_name,
        reference_email_address,
        reference_contact_number,
        reference_relationship,
        second_reference_first_name,
        second_reference_last_name,
        second_reference_email_address,
        second_reference_contact_number,
        second_reference_relationship,
      }

      setRefId({
        first_id: first_reference_id,
        second_id: second_reference_id
      })

      setFormData(formData)
    }
  }, [data])

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

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function onImageChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData, attachment: event.target.files[0]
      }
    })
  }

  const navigate = useNavigate()

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
    fetch(`http://localhost:3000/api/v1/employees/${id}`, {
      method: 'PUT',
      body: formData
    })
      .then((response) => response.json())
      .then((employeeResponse) => {
        const employeeId = employeeResponse.id;
        ReferenceFormData.append('reference[employee_id]', employeeId);
        SecondReferenceFormData.append('reference[employee_id]', employeeId);

        fetch(`http://localhost:3000/api/v1/references/${first_id.first_reference_id}`, {
          method: 'PUT',
          body: ReferenceFormData
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));

        fetch(`http://localhost:3000/api/v1/references/${second_id.second_reference_id}`, {
          method: 'PUT',
          body: SecondReferenceFormData
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }


  console.log(refId)

  if (!formData) {
    // Render a loading message or component while waiting for data
    return <div>Loading...</div>
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
