class AddColumnsToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :columns, :integer
  end
end
