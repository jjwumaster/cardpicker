class MerchantSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :long, :address, :category
  belongs_to :user
end
