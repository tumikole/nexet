import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "../formComponent/form";
import './modalForm.css'

class ModalButton extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div
          
          style={{ height: "5vh" }}
        >
          <Button variant="primary" onClick={this.openModal}>
              Add
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Employee Form</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
        <Form/>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalButton;