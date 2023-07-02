class AddContactNumberFromReferences < ActiveRecord::Migration[7.0]
  def change
    add_column :references, :contact_number, :string
  end
end
