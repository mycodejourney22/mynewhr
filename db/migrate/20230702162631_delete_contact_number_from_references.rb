class DeleteContactNumberFromReferences < ActiveRecord::Migration[7.0]
  def change
    remove_column :references, :contact_number, :integer

  end
end
