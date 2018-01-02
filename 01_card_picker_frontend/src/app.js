class App {

  static restart() {
    Adapter.getUsers()
    Adapter.getCards()
    App.addClickListeners()
    App.renderIndex()
  }

  static addClickListeners() {
    document.body.addEventListener('click', (e) => {
      let topDiv = document.getElementById("top")
      switch(e.target.id) {
        case 'right-header':
          App.renderLocation()
          break
        case 'right-text':
          App.renderLocation()
          break
        case 'left-header':
          App.renderWallet()
          break
        case 'left-text':
          App.renderWallet()
          break
        case 'back':
          location.reload()
          break
        case 'back-text':
          location.reload()
          break
        default:
          console.log(e)
      }

      switch(e.target.className) {
        case 'card-image':
          let card = Card.find_by_name(e.target.alt)
          Card.switchUser(card, e.target)
          e.target.remove()
          break
        case 'merchant':

          let container = document.getElementById('container')

          let rightHeader = document.getElementById('right-header')
          rightHeader.innerHTML = `<h3> WHIP THIS OUT </h3>`
          let merchantId = parseInt(e.target.id.split("-")[1]) // merchant ID
          currentMerchant = Merchant.find(merchantId)

          // let right = document.createElement('div')
          // right.id = 'right'
          // container.append(right)

          let bestCardArray = Card.bestCard(currentMerchant.category)
          let bestCard = bestCardArray[0]
          let reward = bestCardArray[1]
          let bestCardImg = Card.makeCard(bestCard)

          let bestCardDiv = document.createElement('div')
          let bestCardCard = document.createElement('div')

          let rightRight = document.createElement('div')
          container.append(rightRight)
          rightRight.className = 'rightright'
          rightRight.id = 'rightright'

          bestCardDiv.innerHTML += `
            <h3>MERCHANT:</h3>
            <h2>${currentMerchant.name.toUpperCase()}</h2><br>
            <h3>CARD CATEGORY:</h3>
            <h2>${currentMerchant.category.toUpperCase()}</h2><br>
            `

          bestCardCard.innerHTML += `
          <h3>BEST BET:</h3><br>
          `

          bestCardCard.append(bestCardImg)

          bestCardCard.innerHTML += `
            <h3>YOUR REWARD:</h3><br>
            <span class="blinker">${reward}%</span>`

          right.append(bestCardDiv)
          rightRight.append(bestCardCard)

          break

        default:
          console.log(e)
      }

    })
  }

  static renderLocation() {
    this.clearAll()
    Location.getLocation()
    let topDiv = document.getElementById("top")
    topDiv.innerHTML = `<h1>I SEE WHERE YOU ARE,<br>${currentUser.name.toUpperCase()}.</h1>`

    // change left header
    let leftHeader = document.getElementById("left-header")
    leftHeader.innerHTML = `<h3>PICK YA SPOT</h3>`
  }

  static renderWallet() {
    // get rid of the WHERE YOU AT button
    let rightHeader = document.getElementById("right-header")
    rightHeader.remove()
    let container = document.getElementById("container")
    container.innerHTML += `
      <div class="right-header" id="other-cards">
        <h3 id="other-cards-text">PLASTIC YOU COULD<br> BE HAVIN'</h3>
      </div>
    `
    let topDiv = document.getElementById("top")
    currentUser.displayUserCards()
    topDiv.innerHTML = `<h1>NICE WALLET, ${currentUser.name.toUpperCase()}.<br>REAL NICE.</h1>`
  }

  static clearRight() {
    if (document.getElementById("right")) {
      let right = document.querySelectorAll("right")
      for (element of right) {
        element.remove()
      }
    }
  }

  static clearRightRight() {
    if (document.getElementById("rightright")) {
      let right = document.querySelectorAll(".rightright")
      for (element of right) {
        element.remove()
      }
    }
  }

  static clearLeft() {
    let left = document.getElementById("left")
    left.innerHTML = ``
  }

  static clearAll() {
    this.clearLeft()
    this.clearRight()
  }

  static renderIndex() {
    let container = document.getElementById("container")
    container.innerHTML = `
      <div class="index">
        <div class="back" id="back">
          <h3 id="back-text">HOME</h3>
        </div>
      </div>

      <div class="add-cards">
      </div>

      <div class="locate" id="locate">
      </div>

      <div class="right" id="right">
          <!-- <ol id="merchant-list">
          </ol> -->
      </div>

      <div class="left" id="left">
      </div>

      <div class="card" id="card">
      </div>

      <div class="footer" id="footer">
        <h5>Made with love @ Flatiron</h5>
      </div>

      <div class="left-header" id="left-header">
        <h3 id="left-text">YOUR <br> WALLET</h3>
      </div>

      <div class="right-header" id="right-header">
        <h3 id="right-text">WHERE YOU AT?</h3>
      </div>
      `
  }

}
