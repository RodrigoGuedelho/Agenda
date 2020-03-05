import React, { Component, Fragment } from 'react';
import TableAgenda from '../../components/TableAgenda'
import {Container, Button, Row, Col} from 'react-bootstrap'


export default class Home extends Component{
  
  render () {
   return (
      <Fragment>     
        <br />
        <Container>
          <center><h1>Agenda</h1></center> 
          <br />
          <Row md={3}>

            <Col>
              <Button variant="primary" href="/cadastro">Novo</Button>
            </Col>    
          </Row>
          
          <TableAgenda />
        </Container> 
      </Fragment>
  
    )
  }
}
