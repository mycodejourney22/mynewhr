class ReferenceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email_address, :contact_number, :relationship, :employee_id
end
