class RenameRowsFromReservationsToRow < ActiveRecord::Migration[5.2]
  def change
    rename_column :reservations, :rows, :row
    rename_column :reservations, :columns, :column
  end
end
