class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  include Rails.application.routes.url_helpers
  attributes :first_name, :last_name, :address, :date_of_birth, :attachment
  has_many :references

  def attachment
    if object.attachment.attached?
      {
        url: rails_blob_url(object.attachment)
      }
    end
  end
end
