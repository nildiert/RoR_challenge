class CreateCalculators < ActiveRecord::Migration[5.2]
  def change
    create_table :calculators do |t|
      t.string :text_operation
      t.integer :result
      t.integer :count

      t.timestamps
    end
  end
end
