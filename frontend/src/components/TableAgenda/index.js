import React, { Component } from 'react';
import {Table, Button, Form, Row, Col} from 'react-bootstrap'
import ButtonDelete from "../ButtonDelete"
import api from "../../services/api";
import { FiEdit, FiPlus, FiDownload} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import RelAgenda from '../../reports/RelAgenda'
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

  async  shouldComponentUpdate() {
    const agendas = await api.post("/agenda/find", {nome: this.state.pesquisa})
    
    await this.setState({agendas : agendas.data}); 
  }
  handleChange = async e => { 
    await this.setState({ [e.target.name]: e.target.value });
    const agendas = await api.post("/agenda/find", {nome: this.state.pesquisa})
    
    await this.setState({agendas : agendas.data}); 
  };
  handleCLick = e =>{
    this.setState({showModalCancellation: true})
  }

  handleCLickReport = e =>{
    const report = new RelAgenda()
    report.create(this.state.agendas)
  }
  render(){
    return ( 
      <>
         <Row md={3}>
            <Col>
              <Link className="btn btn-primary" variant="primary" to="/cadastro">
                <FiPlus size={18} color="#fff" />
              </Link>
              <Button variant="primary" style={{marginLeft: '5px'}} 
                onClick= {this.handleCLickReport}> 
                <FiDownload size={18} color="#fff" style={{marginRight: 5}}/> 
                PDF
              </Button>
            </Col>    
          </Row>
        <br/> 
        <Row md={2}>
          <Col>
            <Form.Group controlId="nome" >
              <Form.Control  type="text"  name="pesquisa" placeholder="Buscar " 
                  onChange={this.handleChange}  />
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
                    <Button variant="success" href={"/editar/" + agenda.id} style={{marginRight: "5px"}}>
                      <FiEdit size={18} color= "#fff" />
                    </Button> 
                    <ButtonDelete urlRequest="/agenda/delete/" idAgenda={agenda.id} />             
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