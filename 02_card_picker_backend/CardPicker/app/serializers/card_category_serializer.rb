class CardCategorySerializer < ActiveModel::Serializer
  attributes :card, :category, :reward
  belongs_to :card
end
