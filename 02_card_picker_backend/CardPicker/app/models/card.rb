class Card < ApplicationRecord
  belongs_to :user
  has_many :card_categories
  has_many :categories, through: :card_categories

  validates :name, presence: true, uniqueness: true

end
