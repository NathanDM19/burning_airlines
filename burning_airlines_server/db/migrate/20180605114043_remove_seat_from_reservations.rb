class RemoveSeatFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :seat, :text
  end
end
