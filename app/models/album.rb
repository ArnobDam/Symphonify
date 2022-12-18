# == Schema Information
#
# Table name: albums
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  artist_id       :bigint           not null
#  year            :integer          not null
#  album_photo_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Album < ApplicationRecord
    validates :title, :artist_id, :year, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :songs,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Song,
        dependent: :destroy
end
