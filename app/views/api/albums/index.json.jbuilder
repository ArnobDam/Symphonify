@albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :artist_id, :title, :year, :album_photo_url
      json.set! 'artist' do
         json.extract! album.artist, :name
      end
    end
end