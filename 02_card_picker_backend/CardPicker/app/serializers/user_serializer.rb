class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :long
  has_many :cards
  has_many :merchants
end
