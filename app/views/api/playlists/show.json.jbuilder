# debugger
json.playlist do
    json.extract! @playlist, :id, :title, :creator_id, :song_ids
    json.set! "Creator" do
        json.extract! @playlist.user, :username
    end
    json.set! "songs" do
        @playlist.songs.each do |song|
            json.set! song.id do
                json.extract! song, :title, :song_url
                json.extract! song.artist, :name
                json.extract! song.album, :album_photo_url
            end
        end
    end
end