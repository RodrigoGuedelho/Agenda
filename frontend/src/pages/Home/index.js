import React, { Component, Fragment } from 'react';
import TableAgenda from '../../components/TableAgenda'
import {Container} from 'react-bootstrap'

export default class Home extends Component{
  
  render () {
   return (
      <Fragment>     
        <br />
        <Container>
          <center><h1>Agenda</h1></center> 
          <br />
          <TableAgenda />
        </Container> 
      </Fragment>
  
    )
  }
}
