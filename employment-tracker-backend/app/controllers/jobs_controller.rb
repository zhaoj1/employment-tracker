class JobsController < ApplicationController
    def create
        job = Job.new(jobParams)
        if job.save
            render json: job
        else
            render json: 'error'
        end
    end

    def index
        jobs = Job.all
        render json: jobs
    end

    def show
        job = Job.find(params[:id])
        render json: job, status: ok
    end

    def destroy
        job = Job.find(params[:id])
        job.destroy
    end

    private
    
        def jobParams
            params.require(:job).permit(:title, :application_info, :company_name, :job_title, :date_applied, :link)
        end
end
