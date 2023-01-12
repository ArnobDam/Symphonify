# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Playlist < ApplicationRecord

    validates :title, :creator_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :playlist_songs,
        primary_key: :id,
        foreign_key: :playlist_id,
        class_name: :PlaylistSong,
        dependent: :destroy

    has_many :songs,
        through: :playlist_songs,
        source: :song

    has_many :albums,
        through: :songs,
        source: :album

    has_many :artists,
        through: :albums,
        source: :artist

end
