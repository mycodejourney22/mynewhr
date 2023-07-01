class AddMoreColumnsToEmployees < ActiveRecord::Migration[7.0]
  def change
    add_column :employees, :position, :string
    add_column :employees, :email_address, :string
    add_column :employees, :phone_number, :string
    add_column :employees, :start_date, :date
    add_column :employees, :end_date, :date
  end
end
