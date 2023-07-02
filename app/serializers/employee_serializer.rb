class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  include Rails.application.routes.url_helpers
  attributes :first_name, :last_name, :address, :date_of_birth, :attachment,
             :position, :email_address, :phone_number, :start_date, :active
  has_many :references

  def attachment
    if object.attachment.attached?
      {
        url: rails_blob_url(object.attachment)
      }
    end
  end
end
