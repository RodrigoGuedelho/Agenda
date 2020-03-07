import React, { Component } from 'react';
import {Table, Button, Form, Row, Col} from 'react-bootstrap'

import api from "../../services/api";
// import { Container } from './styles';

export default class TableAgenda extends Component{
  state = {
    agendas : [],
    pesquisa: ""
  };
  async componentDidMount(){
    const agendas = await api.post('/agenda/find/', {
      "nome": ''
    });
    this.setState({agendas : agendas.data});
  }

  handleChange = async e => { 
    await this.setState({ [e.target.name]: e.target.value });
    const agendas = await api.post("/agenda/find", {nome: this.state.pesquisa})
    
    await this.setState({agendas : agendas.data}); 
  };
  render(){
    return ( 
      <>
         <Row md={3}>
            <Col>
              <Button variant="primary" href="/cadastro">Novo</Button>
            </Col>    
          </Row>
        <br/> 
        <Row md={2}>
          <Col>
            <Form.Group controlId="nome" >
              <Form.Control  type="text"  name="pesquisa" placeholder="Buscar " 
                  onChange={this.handleChange} />
            </Form.Group>
          </Col>
        </Row> 
       
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
      </>
    );
  }
  
};