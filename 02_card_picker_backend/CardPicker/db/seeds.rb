# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Card.destroy_all
CardCategory.destroy_all
Category.destroy_all
Merchant.destroy_all

no_one = User.create(name: "No one", lat: 0.00, long: 0.00)
jon = User.create(name: "Jon", lat: 40.0, long: -70.0)

grocery = Category.create(name: "grocery")
gas = Category.create(name: "gas")
restaurant = Category.create(name: "restaurant")
entertainment = Category.create(name: "entertainment")
business = Category.create(name: "business")
air = Category.create(name: "air")
hotel = Category.create(name: "hotel")
car = Category.create(name: "car")
travel = Category.create(name: "travel")
other = Category.create(name: "other")

def create_card_categories(card, hash)
  hash.each do |key, value|
    cat = Category.find_by(name: key)
    CardCategory.create({
      card: card,
      category: cat,
      reward: value
      })
  end
end

### Chase Freedom Unlimited

chase_freedom_unlimited = Card.create(user: no_one, name: "Chase Freedom Unlimited", image: "http://www.bankcheckingsavings.com/wp-content/uploads/2017/04/Chase-Freedom-Unlimited.png")

chase_freedom_unlimited_hash = {
  grocery: 1.50,
  gas: 1.50,
  restaurant: 1.50,
  entertainment: 1.50,
  business: 1.50,
  air: 1.50,
  hotel: 1.50,
  car: 1.50,
  travel: 1.50,
  other: 1.50
}

create_card_categories(chase_freedom_unlimited, chase_freedom_unlimited_hash)

### Chase Sapphire Reserve

chase_sapphire_reserve = Card.create(user: jon, name: "Chase Sapphire Reserve", image: "https://creditcards.chase.com/R-Marketplace/1110008/images/cardart/sapphire_reserve_card.png")

chase_sapphire_reserve_hash = {
  grocery: 1.00,
  gas: 1.00,
  restaurant: 3.00,
  entertainment: 1.00,
  business: 1.00,
  air: 3.00,
  hotel: 3.00,
  car: 3.00,
  travel: 3.00,
  other: 1.00
}

create_card_categories(chase_sapphire_reserve, chase_sapphire_reserve_hash)

### Chase Sapphire Preferred

chase_sapphire_preferred = Card.create(user: jon, name: "Chase Sapphire Preferred", image: "https://creditcards.chase.com/R-Marketplace/1110008/images/cardart/sapphire_preferred_card.png")

chase_sapphire_preferred_hash = {
  grocery: 1.00,
  gas: 1.00,
  restaurant: 2.00,
  entertainment: 1.00,
  business: 1.00,
  air: 2.00,
  hotel: 2.00,
  car: 2.00,
  travel: 2.00,
  other: 1.00
}

create_card_categories(chase_sapphire_preferred, chase_sapphire_preferred_hash)

### Chase Ink Business Preferred

chase_ink_business_preferred = Card.create(user: jon, name: "Chase Ink Business Preferred", image: "https://creditcards.chase.com/R-Marketplace/1110008/images/cardart/ink_preferred_card.png")

chase_ink_business_preferred_hash = {
  grocery: 1.00,
  gas: 1.00,
  restaurant: 1.00,
  entertainment: 1.00,
  business: 3.00,
  air: 3.00,
  hotel: 3.00,
  car: 3.00,
  travel: 1.00,
  other: 1.00
}

create_card_categories(chase_ink_business_preferred, chase_ink_business_preferred_hash)
