import Sequelize from "sequelize"
import Agenda from '../app/models/Agenda'
import databaseConfig from '../config/database'

const models = [Agenda]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map(model => {
      model.init(this.connection)
    })
  }
}

export default new Database()

