class Api::CardsController < ApplicationController

  def index
    @cards = Card.all
    render json: @cards, status: 200
  end

  def update
    @card = Card.find(params[:id])
    @card.update(card_params)
    render json: @card, status:200
  end

  def card_params
    params.require(:card).permit(:id, :name, :user_id, :image)
  end
end
