class User < ApplicationRecord
  has_many :cards
  has_many :merchants

  validates :name, :lat, :long, presence: true

  def get_nearby
    response = RestClient.get(
      "https://api.foursquare.com/v2/venues/search?client_id=#{FOURSQUARE_CLIENT_ID}&client_secret=#{FOURSQUARE_CLIENT_SECRET}&v=#{DateTime.now.strftime('%Y%m%d')}",
      {params: {
        'll' => "#{self.lat}, #{self.long}",
        'limit' => 10
      }}
    )
    JSON.parse(response)
  end

end
