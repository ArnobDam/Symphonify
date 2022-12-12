class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.references :album, null: false, index: true, foreign_key: true
      t.string :song_url, null: false

      t.timestamps
    end

    change_column_null :albums, :artist_id, false
  end
end
