class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users, status: 200
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params(:lat, :long))
    response = @user.get_nearby

    # seed the categories
    Category.categorize
    fs_categories = Category.output

    Merchant.destroy_all

    response["response"]["venues"].each do |venue|

      venue_category = venue["categories"].find do |category|
        fs_categories[category["id"]] != "other" # returns parent category
      end

      unless venue_category
        venue_category = venue["categories"].first
      end

      cat_object = Category.find_by(name: fs_categories[venue_category["id"]])

      @merchant = Merchant.create({
        name: venue["name"],
        address: venue["location"]["address"],
        lat: venue["location"]["lat"],
        long: venue["location"]["lng"],
        user: @user,
        category: cat_object
        })

    end
    render json: @user, status: 200
  end

  def user_params(*args)
    params.require(:user).permit(*args)
  end

end
