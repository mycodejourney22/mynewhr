class Employee < ApplicationRecord
  mount_uploaders :attachment, AttachmentUploader
end
