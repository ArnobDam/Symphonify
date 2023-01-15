json.album do
    json.set! "songs" do
        @songs.each do |song|
            json.set! song.id do
                json.extract! song, :title, :song_url
                json.extract! song.artist, :name
            end
        end
    end
    json.set! "artist" do
        json.extract! @album.artist, :name
    end
    json.extract! @album, :id, :artist_id, :title, :year, :album_photo_url, :song_ids
end
