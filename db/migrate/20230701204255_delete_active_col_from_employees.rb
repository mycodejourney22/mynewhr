class DeleteActiveColFromEmployees < ActiveRecord::Migration[7.0]
  def change
    remove_column :employees, :active, :boolean
  end
end
