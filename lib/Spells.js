const axios = require('axios')

class Spells {
  static async find(filter) {
    if (filter === undefined) {
      const response = await axios.get('https://www.dnd5eapi.co/api/spells/')
      console.log(response.data)
      return response.data
    }
    if(filter.level) {
      const  levels = filter.level.join(',')
      const response = await axios.get(`https://www.dnd5eapi.co/api/spells?level=${levels}`)
      console.log(response.data)
      return response.data
    }
    if(filter.school) {
      const schools = filter.school.join(',')
      const response = await axios.get(`https://www.dnd5eapi.co/api/spells?school=${schools}`)
      console.log(response.data)
      return response.data
    }
  }
}

module.exports = Spells;
