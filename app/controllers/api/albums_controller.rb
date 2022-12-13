class Api::AlbumsController < ApplicationController
    
    def index
        @albums = Album.all
        render :index
    end

    def show
        # debugger
        @album = Album.find_by(id: params[:id])
        @songs = @album.songs
        @artist_id = @album.artist_id
        render :show
    end


end
