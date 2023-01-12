json.playlist do
    json.extract! @playlist, :id, :title, :creator_id
    json.set! "Creator" do
        json.extract! @playlist.user, :username
    end
end