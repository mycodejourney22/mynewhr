class Employee < ApplicationRecord
  mount_uploaders :attachment, AttachmentUploader
  has_one_attached :photo
  has_many :references, dependent: :destroy
  has_one :compensation, dependent: :destroy
  accepts_nested_attributes_for :references
  accepts_nested_attributes_for :compensation
end
