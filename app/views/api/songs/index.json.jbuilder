@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :album_id, :song_url
    end
end