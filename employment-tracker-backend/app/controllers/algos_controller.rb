class AlgosController < ApplicationController

    def create
        algo = Algo.new(algoParams)
        if algo.save
            render json: algo
        else
            render json: 'error'
        end
    end

    def index
        algos = Algo.all
        render json: algos
    end

    def show
        algo = Algo.find(params[:id])
        render json: algo, status: ok
    end

    def destroy
        algo = Algo.find(params[:id])
        algo.destroy
    end

    private

        def algoParams
            params.require(:algo).permit(:topic, :date_completed)
        end

end
