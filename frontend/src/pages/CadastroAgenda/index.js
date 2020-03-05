import React, { Component, Fragment } from 'react';

import { Container, Button, Form, Col, Row } from 'react-bootstrap'


export default class CadastroAgenda extends Component {

  render() {
    return (
      <Fragment>
        <br />
        <Container>
          <center><h1>Cadastro de pessoa:</h1></center>
          <Form>
            <Row md={2}>
              <Col>
                <Form.Group controlId="nome" >
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control type="text" placeholder="Nome" />
                </Form.Group>
                </Col>  
                <Col>
                  <Form.Group controlId="email" >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Email@Exemplo.com" />
                  </Form.Group>
                </Col>  
            </Row>
            
            <Row md={3}>
              <Col sm={3}>
                <Form.Group controlId="nome" >
                  <Form.Label>Telefone:</Form.Label>
                  <Form.Control type="text" placeholder="(XX) 9XXXX-XXXX" />
                </Form.Group>
              </Col>  
              <Col sm={9}>
                <Form.Group controlId="github" >
                  <Form.Label>Github:</Form.Label>
                  <Form.Control type="text" placeholder="github.com/usuario" />
                </Form.Group>
              </Col>  
            </Row>
            <Row md={2} >
              <Col>
                <Button  variant="success" type="submit">Salvar</Button>
                <Button variant="primary"  href="/">Sair</Button>
              </Col>
            </Row>
            </Form>
        </Container>
      </Fragment>

    )
  }
}
