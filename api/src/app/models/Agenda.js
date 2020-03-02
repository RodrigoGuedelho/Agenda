import Sequelize, {Model} from "sequelize"

class Agenda extends Model{

  static init (sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        telefone: Sequelize.STRING,
        github: Sequelize.STRING,
      },
      {
        sequelize,
        tableName : 'agenda'
      }

    )
  }
}
export default Agenda