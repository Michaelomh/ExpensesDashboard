import React, { Component } from 'react';
import { Modal, Form, ControlLabel,FormGroup, Button, FormControl } from 'react-bootstrap';

class RecordsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        monthyear: '',
        amount: 0,
        notes: ''
    };

      this.handleInputChange = this.handleInputChange.bind(this);
  }

  onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.submitNewRecord();
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(name , value);
    this.setState({
      [name]: value
    });
  }

  submitNewRecord = () => {
    console.log(this.state.monthyear);
    console.log(this.state.amount);
    console.log(this.state.notes);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup className="login-form-group">
              <ControlLabel>MONTH-YEAR</ControlLabel>
              <FormControl name="monthyear" type="text" value={this.state.monthYear} onChange={this.handleInputChange} onKeyDown={this.onEnterPress}/>

              <ControlLabel>AMOUNT</ControlLabel>
              <FormControl name="amount" type="number" value={this.state.amount} onChange={this.handleInputChange} onKeyDown={this.onEnterPress}/>

              <ControlLabel>NOTES</ControlLabel>
              <FormControl name="notes" type="text" value={this.state.notes} onChange={this.handleInputChange} onKeyDown={this.onEnterPress}/>

              <Button bsStyle="primary" onClick={this.submitNewRecord}>LOGIN</Button>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <span onClick={this.props.handleClose}>Close</span>
        </Modal.Footer>
      </Modal>
    )
  }
}


export default RecordsModal;
