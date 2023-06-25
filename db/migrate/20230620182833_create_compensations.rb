class CreateCompensations < ActiveRecord::Migration[7.0]
  def change
    create_table :compensations do |t|
      t.string :current_salary
      t.string :past_salary
      t.date :last_reviewed_date
      t.references :employee, null: false, foreign_key: true
      t.text :comment

      t.timestamps
    end
  end
end
