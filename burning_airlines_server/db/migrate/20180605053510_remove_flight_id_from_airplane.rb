class RemoveFlightIdFromAirplane < ActiveRecord::Migration[5.2]
  def change
    remove_column :airplanes, :flight_id, :integer
  end
end
