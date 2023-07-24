class AddSalariesToCompensation < ActiveRecord::Migration[7.0]
  def change
    add_column :compensations, :salaries, :string, array: true, default: []
  end
end
