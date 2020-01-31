class MeetupsController < ApplicationController

    def create
        meetup = Meetup.new(meetupParams)
        if meetup.save
            render json: meetup
        else
            render json: 'error'
        end
    end

    def index
        meetups = Meetup.all
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
            params.require(:meetup).permit(:topic, :location, :date_of_meetup, :location)
        end

end
