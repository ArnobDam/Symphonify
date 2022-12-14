class Api::SessionsController < ApplicationController
    
    before_action :require_logged_in, only: [:create]
    before_action :require_logged_in, only: [:destroy]
    
    def show
        @user = current_user
        if @user
            # debugger
            render 'api/users/show'
        else
            render json: { user: nil }
        end
    end

    def create
        # credential = params[:username] ? params[:username] : params[:email] # takes in username or email
        credential = params[:credential]
        # credential = params[:username]
        # debugger
        password = params[:password]
        @user = User.find_by_credentials(credential, password)
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: { errors: ['Invalid credentials'] }, status: 422
        end
    end

    def destroy
        logout!
        render json: { message: 'Logout successful'}
        # head :no_content # populate http response with no content => no body
    end
end
