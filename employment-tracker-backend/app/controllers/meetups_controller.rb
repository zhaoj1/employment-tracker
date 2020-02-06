class MeetupsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        meetup = Meetup.new(meetupParams)
        if meetup.save
            render json: meetup
        else
            render json: 'error'
        end
    end

    def index
        user = User.find(params[:user_id])
        meetups = Meetup.select{|meetup| meetup.user_id === user.id}
        render json: meetups
    end

    def show
        meetup = Meetup.find(params[:id])
        render json: meetup, status: ok
    end

    def destroy
        meetup = Meetup.find(params[:id])
        meetup.destroy
    end

    private

        def meetupParams
            params.require(:meetup).permit(:topic, :location, :date_of_meetup, :link, :user_id)
        end

end
