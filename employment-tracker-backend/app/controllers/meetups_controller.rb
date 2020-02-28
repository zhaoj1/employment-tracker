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
        user = User.find(params[:user_id])
        meetup = Meetup.find(params[:id])
        render json: meetup
    end

    def update
        meetup = Meetup.find(params[:id])
        meetup.update(meetupParams)
    end

    def destroy
        meetup = Meetup.find(params[:id])
        meetup.destroy
        notes = Note.where(page_type: '/meetups', page_id: params[:id]).destroy_all
    end

    private

        def meetupParams
            params.require(:meetup).permit(:title, :location, :date_of, :time_of, :link, :user_id)
        end

end
