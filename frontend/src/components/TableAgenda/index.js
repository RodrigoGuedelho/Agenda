import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap'
import { render } from 'react-dom';
import api from "../../services/api";
// import { Container } from './styles';

export default class TableAgenda extends Component{
  state = {
    agendas : []
    };
  async componentDidMount(){
    const agendas = await api.post('/agenda/find/', {
      "nome": ''
    });
    console.log('>>> Rodrigo   ' + agendas.data)
    this.setState({agendas : agendas.data});
    console.log('>>> Rodrigo   ' + agendas)
  }
  render(){
    return (   
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>github</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.state.agendas.map(agenda => 
            <tr>
              <td>{agenda.id}</td>
              <td>{agenda.nome}</td>
              <td>{agenda.email}</td>
              <td>{agenda.telefone}</td>
              <td>{agenda.github}</td>
              <td>
                <center>
                  <Button variant="success">Editar</Button> 
                  <Button variant="danger">Deletar</Button>
                </center>
              </td>
            </tr>
          )}
          
          
        </tbody>
      </Table>
    );
  }
  
};