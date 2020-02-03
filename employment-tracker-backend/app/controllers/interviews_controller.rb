class InterviewsController < ApplicationController

    def create
        interview = Interview.new(interviewParams)
        if interview.save
            render json: interview
        else
            render json: 'error'
        end
    end

    def index
        interviews = Interview.all
        render json: interviews
    end

    def show
        interview = Interview.find(params[:id])
        render json: interview, status: ok
    end

    def destroy
        interview = Interview.find(params[:id])
        interview.destroy
    end

    private

        def interviewParams
            params.require(:interview).permit(:title, :company_name, :job_title, :interviewer, :link, :date_of_interview)
        end

end
