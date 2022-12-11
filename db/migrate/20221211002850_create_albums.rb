class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.integer :year, null: false
      t.string :album_photo_url

      t.timestamps
    end

    add_index :albums, :title
    add_index :albums, :artist_id

    add_foreign_key :albums, :artists,
    column: :artist_id, primary_key: :id
  end
end
