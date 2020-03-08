import React, { Component, Fragment } from 'react';

import { Container, Button, Form, Col, Row, Alert } from 'react-bootstrap'
import api from "../../services/api"

export default class CadastroAgenda extends Component {
  state = {
    nome: "",
    email: "",
    telefone: "",
    github: "",
    showAlert: false,
    variantAlert: "",
    messageAlert: ""
  };

  clearVariables() {
    this.setState({
      nome: "",
      email: "",
      telefone: "",
      github: ""
    })
  }
  handleOnSubmit = async e => {
    e.preventDefault(e);
    try {
      const agenda = await api.post("/agenda/store",
        {
          nome: this.state.nome,
          email: this.state.email,
          telefone: this.state.telefone,
          github: this.state.github
        }
      );
      if (agenda) {      
        this.setState({
          showAlert: true, variantAlert: 'success',
          messageAlert: 'Cadastro realizado com sucesso.'
        })
        this.clearVariables()
     }
      else
        this.setState({
          showAlert: true, variantAlert: 'danger',
          messageAlert: 'Erro ao tenta realizar cadastro, por favor tente novamente.'
        })

    } catch (error) {
       this.setState({
        showAlert: true, variantAlert: 'danger',
        messageAlert: 'Erro ao tenta realizar cadastro, por favor tente novamente. ' + 
        error
      })
    }
  };
  render() {
    return (
      <Fragment>
        <br />
        <Container>
          <center><h1>Cadastro de pessoa:</h1></center>

          <Alert variant={this.state.variantAlert} show={this.state.showAlert}>
            {this.state.messageAlert}
          </Alert>
          <Form onSubmit={this.handleOnSubmit}>
            <Row md={2}>
              <Col>
                <Form.Group controlId="nome" >
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control type="text" placeholder="Nome" value={this.state.nome}
                    onChange={e => this.setState({ nome: e.target.value })} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Email@Exemplo.com" 
                    value={this.state.email} 
                      onChange={e => this.setState({ email: e.target.value })} />
                </Form.Group>
              </Col>
            </Row>

            <Row md={3}>
              <Col sm={3}>
                <Form.Group controlId="nome" >
                  <Form.Label>Telefone:</Form.Label>
                  <Form.Control type="text" placeholder="(XX) 9XXXX-XXXX" 
                    value={this.state.telefone}
                    onChange={e => this.setState({ telefone: e.target.value })} />
                </Form.Group>
              </Col>
              <Col sm={9}>
                <Form.Group controlId="github" >
                  <Form.Label>Github:</Form.Label>
                  <Form.Control type="text" placeholder="github.com/usuario" 
                  value={this.state.github}
                    onChange={e => this.setState({ github: e.target.value })} />
                </Form.Group>
              </Col>
            </Row>
            <Row md={2} >
              <Col>
                <Button variant="success" type="submit">Salvar</Button>
                <Button variant="primary" href="/">Sair</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Fragment>

    )
  }
}
