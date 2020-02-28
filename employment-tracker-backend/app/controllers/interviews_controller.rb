class InterviewsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        interview = Interview.new(interviewParams)
        if interview.save
            render json: interview
        else
            render json: 'error'
        end
    end

    def index
        user = User.find(params[:user_id])
        interviews = Interview.select{|interview| interview.user_id === user.id}
        render json: interviews
    end

    def show
        interview = Interview.find(params[:id])
        render json: interview, status: ok
    end

    def update
        interview = Interview.find(params[:id])
        interview.update(interviewParams)
    end

    def destroy
        interview = Interview.find(params[:id])
        interview.destroy
        notes = Note.where(page_type: '/interviews', page_id: params[:id]).destroy_all
    end

    private

        def interviewParams
            params.require(:interview).permit(:title, :company_name, :job_title, :interviewer, :link, :date_of, :time_of, :user_id)
        end

end
