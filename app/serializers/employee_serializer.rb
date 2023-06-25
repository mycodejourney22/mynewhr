class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :address, :date_of_birth, :attachment
  has_many :references
end
