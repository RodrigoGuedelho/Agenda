import React, { Component } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import api from "../../services/api"

export default class ButtonDelete extends Component{
  state = {show: false}
  handleShow =  e =>  {
   this.setState({show: true})
  }
 
  handleClose =  e =>  {
    this.setState({show: false})
  }

  handleOnSubmit = async e => {
    e.preventDefault(e);
    try {
      const agenda = await api.get(this.props.urlRequest + this.props.idAgenda)
      this.handleClose()
    } catch (error) {
      console.log('erro ao tenta cancelar. ' + error)
     }
  }
  

  render(){
    return (
      <>  
        <Button variant="danger" onClick={this.handleShow}>Deletar</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aviso</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tem certeza que deseja excluir?</Modal.Body>
          <Modal.Footer>
            <Form  onSubmit={this.handleOnSubmit}>
            <input name="id" type="hidden" value={this.props.idAgenda} />
              <Button variant="danger" type="submit">
                Sim
              </Button>
            </Form>
            
            <Button variant="secondary" onClick={this.handleClose}>
              Não
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
}