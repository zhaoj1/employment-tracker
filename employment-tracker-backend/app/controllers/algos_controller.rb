class AlgosController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        algo = Algo.new(algoParams)
        if algo.save
            render json: algo
        else
            render json: 'error'
        end
    end

    def index
        user = User.find(params[:user_id])
        algos = Algo.select{|algo| algo.user_id === user.id}
        render json: algos
    end

    def show
        algo = Algo.find(params[:id])
        render json: algo, status: ok
    end

    def update
        algo = Algo.find(params[:id])
        algo.update(algoParams)
    end

    def destroy
        algo = Algo.find(params[:id])
        algo.destroy
    end

    private

        def algoParams
            params.require(:algo).permit(:title, :date_completed, :user_id)
        end

end
