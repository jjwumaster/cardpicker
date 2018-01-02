allUsers = []

class User {
  constructor(json) {
    this.id = json.id
    this.name = json.name
    this.lat = json.lat
    this.long = json.long
    this.cards = []

    allUsers.push(this)
  }

  static find(id) {
    return allUsers.find((user) => {
      return user.id === id
    })
  }

  static find_by_name(name) {
    return allUsers.find((user) => {
      return user.name === name
    })
  }

  static makeUsers(json) {
    allUsers = []
    for (let key of json) {
      let newUser = new User(key)
      newUser.displayUser()
      currentUser = newUser // ONLY WORKS FOR ONE USER
    }
  }

  updateLocation(lat, long) {
    this.lat = lat
    this.long = long
  }

  displayUser() {
    let topDiv = document.createElement('div')
    topDiv.className = "header"
    topDiv.id = "top"
    let container = document.getElementById("container")
    container.append(topDiv)
    // let userElement = document.getElementById("top")
    topDiv.innerHTML = `<h1>HI, ${this.name.toUpperCase()}.<br>WELCOME TO CARDPICKER.</h1>`
  }

  displayUserCards() {
    App.clearAll()
    // leftPaddingTop = 0
    // leftLeftPosition = 0
    // leftZ = 0
    let cardDiv = document.getElementById("card")
    let cards = this.cards
    for (let card in cards) {
      let img = Card.makeCard(cards[card])
      img.setAttribute("style",
        `padding-left: 5px;`
      )
      cardDiv.append(img) // focus here
      // leftPaddingTop += 100
      // leftLeftPosition += 20
      // leftZ++
    }
    Card.displayAllOtherCards()
  }

}
