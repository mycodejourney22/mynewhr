class AddAttrToCompensations < ActiveRecord::Migration[7.0]
  def change
    add_column :compensations, :pension_code, :string
    add_column :compensations, :tax_code, :string
  end
end
