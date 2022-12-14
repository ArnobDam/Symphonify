class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false, index: true 

      t.timestamps
    end

    add_foreign_key :playlists, :users,
    column: :creator_id, primary_key: :id

  end
end
