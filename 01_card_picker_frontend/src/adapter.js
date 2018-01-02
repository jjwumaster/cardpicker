class Adapter {

  static getUsers() {
    fetch(`http://localhost:3000/api/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
      .then(json => User.makeUsers(json))
  }

  static getCards() {
    fetch(`http://localhost:3000/api/cards`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
      .then(json => Card.makeCards(json))
  }

  static switchCardUser(cardId, newUserId) {
    fetch(`http://localhost:3000/api/cards/${cardId}/`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        user_id: newUserId
      })
    }).then(resp => resp.json())
      .then(json => console.log(json))
  }

  static saveLatLong(latLong, userId) {
    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        lat: latLong[0],
        long: latLong[1]
      })
    }).then(resp => resp.json())
      .then(json => Adapter.getMerchants(userId))
  }

  static getMerchants(userId) {
    fetch(`http://localhost:3000/api/users/${userId}/merchants`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
      .then(json => Merchant.makeMerchants(json))
  }

}
