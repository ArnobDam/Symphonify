class CreatePlaylistSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :playlist_songs do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false

      t.timestamps
    end

    add_index :playlist_songs, :playlist_id
    add_foreign_key :playlist_songs, :playlists,
    column: :playlist_id, primary_key: :id

    add_index :playlist_songs, :song_id
    add_foreign_key :playlist_songs, :songs,
    column: :song_id, primary_key: :id
  end
end
