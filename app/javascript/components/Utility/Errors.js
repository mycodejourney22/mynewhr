export const validateForm = (setErrors, formData) => {
  const { first_name, last_name, email_address, position, start_date, date_of_birth, phone_number } = formData;
  let errors = {};

  if (!first_name) {
    errors = { ...errors, first_name: 'First Name is required' }
  }

  if (!last_name) {
    errors = { ...errors, last_name: 'Last Name is required' }
  }

  if (!position) {
    errors = { ...errors, position: 'Position is required' }
  }

  if (!email_address) {
    errors = { ...errors, email: 'Email is required' }
  } else if (!/\S+@\S+\.\S+/.test(email_address)) {
    errors = { ...errors, email: 'Invalid email format' }
  }

  if (!start_date) {
    errors = { ...errors, start_date: 'Start Date is required' }
  }

  if (!date_of_birth) {
    errors = { ...errors, date_of_birth: 'Date of birth is required' }
  }

  if (!phone_number) {
    errors = { ...errors, phone_number: 'Contact number is required' }
  }

  setErrors(errors)
  return Object.keys(errors).length === 0;
}

export const validateRefForm = (setErrors, formData) => {
  const {
    reference_contact_number, reference_email_address, reference_first_name, reference_last_name, reference_relationship } = formData;
  let errors = {};

  if (!reference_first_name) {
    errors = { ...errors, reference_first_name: 'First name is required' }
  }

  if (!reference_last_name) {
    errors = { ...errors, reference_last_name: 'Last name is required' }
  }

  if (!reference_contact_number) {
    errors = { ...errors, reference_contact_number: 'Contact number is required' }
  }

  if (!reference_email_address) {
    errors = { ...errors, reference_email_address: 'Email address is required' }
  }

  if (!reference_relationship) {
    errors = { ...errors, reference_relationship: 'Relationship is required' }
  }

  setErrors(errors)
  return Object.keys(errors).length === 0;
}

export const validateSecRefForm = (setErrors, formData) => {
  const {
    second_reference_first_name, second_reference_last_name, second_reference_contact_number, second_reference_email_address, second_reference_relationship } = formData;
  let errors = {}

  if (!second_reference_first_name) {
    errors = { ...errors, second_reference_first_name: 'First name is required' }
  }

  if (!second_reference_last_name) {
    errors = { ...errors, second_reference_last_name: 'Last name is required' }
  }

  if (!second_reference_email_address) {
    errors = { ...errors, second_reference_email_address: 'Email address is required' }
  }

  if (!second_reference_contact_number) {
    errors = { ...errors, second_reference_contact_number: 'Contact number is required' }
  }

  if (!second_reference_relationship) {
    errors = { ...errors, second_reference_relationship: 'Relationship is required' }
  }

  setErrors(errors)
  return Object.keys(errors).length === 0;
}
