class CreateReferences < ActiveRecord::Migration[7.0]
  def change
    create_table :references do |t|
      t.string :first_name
      t.string :last_name
      t.string :relationship
      t.string :email_address
      t.integer :contact_number
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
