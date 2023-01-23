class Api::PlaylistSongsController < ApplicationController

    def index
        @playlist_songs = PlaylistSong.all
        render :index
    end

    def show
        @playlist_song = PlaylistSong.find_by(id: params[:id])
        render :show
    end

    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)

        if @playlist_song.save
            render :show
        else
            render json: { errors: @playlist_song.errors.full_messages }, status: 422
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find_by(id: params[:id])

        if @playlist_song.destroy

        else
            render json: { errors: @playlist_song.errors.full_messages }, status: 422
        end
        # @playlist_song = PlaylistSong.find_by(playlist_id: params[:playlist_id, song_id: params[:song_id]]);
        # @playlist_song.destroy
    end

    private

    def playlist_song_params
        params.require(:playlist_song).permit(:id, :playlist_id, :song_id)
    end

end
