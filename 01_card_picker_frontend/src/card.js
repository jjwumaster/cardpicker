allCards = []

class Card {
  constructor(json) {
    this.id = json.id
    this.name = json.name
    this.image = json.image
    this.rails_user = json.user
    this.card_categories = json.card_categories
    this.user = User.find(this.rails_user.id)

    this.user.cards.push(this)
    allCards.push(this)
  }

  static all() {
    return allCards
  }

  static find(id) {
    return allCards.find((card) => {
      return card.id === id
    })
  }

  static bestCard(categoryName) {
    let reward = 0
    let returnCard
    for (let card of currentUser.cards) {
      let matchingCardCategory = card.card_categories.find((cardCategory) => {
        return cardCategory.category.name === categoryName
      })
      if (matchingCardCategory.reward > reward) {
        reward = matchingCardCategory.reward
        returnCard = card
      }
    }
    return [returnCard, reward]
  }

  static find_by_name(name) {
    return allCards.find((card) => {
      return card.name === name
    })
  }

  static switchUser(card, img) {
    if (card.user.name === "No one") {
      card.user = currentUser
      Adapter.switchCardUser(card.id, currentUser.id)

      let cardDiv = document.getElementById("card")
      let newImg = Card.makeCard(card)
      cardDiv.append(newImg)
      img.remove()

    } else {
      card.user = User.find_by_name("No one")
      Adapter.switchCardUser(card.id, card.user.id)

      let rightDiv = document.getElementById("right")
      let newImg = Card.makeCard(card)

      rightDiv.append(newImg)
      img.remove()

    }
  }

  static makeCards(json) {
    allCards = []
    currentUser.cards = []
    for (let key of json) {
      let newCard = new Card(key)
    }
    allOtherCards = Card.all().filter((card) => {
      return !currentUser.cards.includes(card)
    })
  }

  static displayAllOtherCards() {
    // let rightPaddingTop = 0
    // let rightLeftPosition = 0
    // let rightz = 0
    let rightDiv = document.getElementById("right")
    for (let card of allOtherCards) {
      let img = Card.makeCard(card)
      // img.setAttribute("style",
      //   `padding-top: ${rightPaddingTop}px;
      //   padding-left: 5px;
      //   z-index: ${rightZ};
      //   position: relative;
      //   left: ${rightLeftPosition};`
      // )
      rightDiv.append(img)
      // rightPaddingTop += 100
      // rightLeftPosition += 20
      // rightZ++
    }
  }

  static makeCard(card) { // how do we make this call-able from another class?
    let img = showImage(card["image"], 207, 135, card["name"])
    let cardDiv = document.getElementById('card')

    cardDiv.appendChild(img)
    img.style.setProperty('--animation-time', Math.random()*3 + 's')
    img.setAttribute("style",
      `padding-left: 5px;`
    )
    // rightPaddingTop += 100
    // rightLeftPosition += 20
    // rightZ++
    return img
  }

}
