import Agenda from '../models/Agenda'
import { Op } from 'sequelize'

class AgendaController {
  async store(req, res) {
    const agendaExist = await Agenda.findOne({where :{email: req.body.email}})
    if (agendaExist) 
      return req.json(res.status(400).json({error: 'Agenda com esse email já existe'}))
    const agenda = await Agenda.create(req.body)

    return res.json(agenda)
  }

  async delete(req, res) {
    const agenda = await Agenda.findOne({where :{id: req.params.id}})
    if (!agenda)
      return req.json(res.status(400).json({error: 'Agenda número ' + req.params.id + ' não existe.'}))
    await agenda.destroy()
    return res.json(res.status(200).json({sucess: 'Agenda deltata com sucesso.'}))
  }

  async update(req, res) {
    const agenda = await Agenda.findOne({where :{id: req.body.id}})
    
    if (!agenda)
      return req.json(res.status(400).json({error: 'Agenda número ' + req.params.id + ' não existe.'}))
    agenda.nome = req.body.nome
    agenda.email = req.body.email
    agenda.telefone = req.body.telefone
    agenda.github = req.body.github
    await agenda.save()
    return res.json(agenda)
  }
  async findOne(req, res) {
    const agenda = await Agenda.findOne({where :{id: req.params.id}})
    
    if (!agenda)
      return req.json(res.status(400).json({error: 'Agenda número ' + req.params.id + ' não existe.'}))
    
    return res.json(agenda)
  }

  async find(req, res) {
    const agenda = await Agenda.findAll({where :{nome: {
      [Op.iLike]: '%' + req.body.nome + '%'
    }}})
    
    if (!agenda)
      agenda = []
    
    return res.json(agenda)
  }


}

export default new AgendaController()