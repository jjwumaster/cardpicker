class Merchant < ApplicationRecord

  belongs_to :user
  belongs_to :category

  validates :name, :lat, :long, :address, presence: true
  validates :name, uniqueness: true

end
