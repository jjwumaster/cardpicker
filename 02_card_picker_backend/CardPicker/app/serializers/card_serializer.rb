class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  belongs_to :user
  has_many :card_categories
end
