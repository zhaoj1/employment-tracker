class AlgorithmsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        algorithm = Algorithm.new(algorithmParams)
        if algorithm.save
            render json: algorithm
        else
            render json: 'error'
        end
    end

    def index
        user = User.find(params[:user_id])
        algorithms = Algorithm.select{|algorithm| algorithm.user_id === user.id}
        render json: algorithms
    end

    def show
        algorithm = Algorithm.find(params[:id])
        render json: algorithm
    end

    def update
        algorithm = Algorithm.find(params[:id])
        algorithm.update(algorithmParams)
    end

    def destroy
        algorithm = Algorithm.find(params[:id])
        algorithm.destroy
        notes = Note.where(page_type: '/algorithms', page_id: params[:id]).destroy_all
    end

    private

        def algorithmParams
            params.require(:algorithm).permit(:title, :date_of, :user_id)
        end

end
