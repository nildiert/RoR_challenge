class CreateCalculators < ActiveRecord::Migration[5.2]
  def change
    create_table :calculators do |t|
      t.string :operation
      t.integer :result, :default => 0 
      t.integer :count, :default => 1

      t.timestamps
    end
  end
end
