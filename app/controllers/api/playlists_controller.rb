class Api::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
        render :index
    end

    def show
        @playlist = Playlist.find_by(id: params[:id])
        # @songs = @playlist.songs
        render :show
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render :show
        else
            render json: { errors: @playlist.errors.full_messages }, status: 422
        end
    end

    def update
        @playlist = Playlist.find_by(id: params[:id])
        
        @playlist.update(playlist_params)
        render :show
    end

    def destroy
        @playlist = Playlist.find_by(id: params[:id])

        if @playlist.destroy

        else
            render json: { errors: @playlist.errors.full_messages }, status: 422
        end

    end

    private

    def playlist_params
        params.require(:playlist).permit(:title, :creator_id, :id)
    end

end
