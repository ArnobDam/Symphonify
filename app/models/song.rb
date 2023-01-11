# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :bigint           not null
#  song_url   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
    validates :title, :album_id, :song_url, presence: true

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album
    
    has_many :playlist_songs,
        primary_key: :id,
        foreign_key: :song_id,
        class_name: :PlaylistSong,
        dependent: :destroy

    has_one :artist,
        through: :album,
        source: :artist

    #belongs_to playlist, with playlist_id, optional
end
