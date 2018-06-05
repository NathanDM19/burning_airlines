class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.datetime :date
      t.text :from_airport
      t.text :to_airport
      t.integer :seats
      t.integer :airplane_id

      t.timestamps
    end
  end
end
