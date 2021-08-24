const axios = require('axios')

class Spells {
  static async find(filter) {
    if (filter === undefined) {
      const response = await axios.get('https://www.dnd5eapi.co/api/spells/')
      console.log(response.data)
    }
  }
}

module.exports = Spells;
