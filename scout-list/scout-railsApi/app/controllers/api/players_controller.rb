class Api::PlayersController < ApplicationController
    before_action :set_player, only: [:show, :destroy]

    def index
        render :json => Player.all
    end

    def create
        player = Player.new(player_params)
        if player.save
            render :json => player
        else
            render :json => {message: player.errors}, status: 400
        end
    end

    def destroy
        if @players.delete
            render :json => players
        else
            render :json => {message: "player Not Deleted"}
        end
    end

    private

    def set_player
        @player = Player.find_by(id: params[:id])
    end

    def player_params
        params.require(:player).permit(:name, :description, :weight, :height, :imgUrl, :school, :fourty )
    end
end
