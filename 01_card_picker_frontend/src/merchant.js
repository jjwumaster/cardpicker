// finds merchant and recommends wallet actions

allMerchants = []

class Merchant {
  constructor(json) {
    this.id = json.id
    this.name = json.name
    this.address = json.address
    this.lat = json.lat
    this.long = json.long
    this.category = json.category.name
    allMerchants.push(this)
  }

  static find(id) {
    return allMerchants.find((merchant) => {
      return merchant.id === id
    })
  }

  static makeMerchants(json) {
    let left = document.getElementById("left")
    left.innerHTML += `<div id='merchant-list'> </div>`
    left.setAttribute("style",
      "grid-row: 3/5")
    let counter = 1
    for (let key in json) {
      let merchant = new Merchant(json[key])
      merchant.showMerchant(counter)
      counter++
    }
  }

  showMerchant() {
    let merchantList = document.getElementById("merchant-list")
    merchantList.innerHTML += `
      <div class="merchant" id="merchant-${this.id}"> ${this.name.toUpperCase()} | ${this.address.toUpperCase()} </div> <br>`
  }
}
