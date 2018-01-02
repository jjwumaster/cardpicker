class Api::MerchantsController < ApplicationController

  def index
    @merchants = Merchant.all
    render json: @merchants, status: 200
  end

end
