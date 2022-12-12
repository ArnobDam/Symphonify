# songs = %w()

json.album do 
    json.extract! @album, :id, :artist_id, :title, :year, :album_photo_url, :song_ids
    # json.array! @album.songs, :id
end

# json.songs do 
#     @album.songs.each do |song|
#         json.song.id
#     end
# end
# debugger
# json.array! @album.songs do |song|
#     json.extract! song, :id, :title, :album_id, :song_url
# end