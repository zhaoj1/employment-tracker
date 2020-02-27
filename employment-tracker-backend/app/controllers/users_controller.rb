class UsersController < ApplicationController

    skip_before_action :verify_authenticity_token
    wrap_parameters :user, include: %i[username password]

    def create
        user = User.new(userParams)
        if user.save
            token = encode_token(user.id)
            render json: {user: user, token: token}
        else
            render json: {errors: user.errors.full_messages}, status: :not_acceptable
        end
    end

    private

        def userParams
            params.require(:user).permit(:username, :password)
        end

end
