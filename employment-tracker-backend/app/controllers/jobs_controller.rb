class JobsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        job = Job.new(jobParams)
        if job.save
            render json: job
        else
            render json: 'error'
        end
    end

    def index
        user = User.find(params[:user_id])
        jobs = Job.select{|job| job.user_id === user.id}
        render json: jobs
    end

    def show
        job = Job.find(params[:id])
        render json: job
    end

    def update
        job = Job.find(params[:id])
        job.update(jobParams)
    end

    def destroy
        job = Job.find(params[:id])
        job.destroy
    end

    private
    
        def jobParams
            params.require(:job).permit(:title, :application_info, :company_name, :job_title, :date_applied, :link, :user_id)
        end
end
