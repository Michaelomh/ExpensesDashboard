import React, { Component } from 'react';
import { Modal, Form, ControlLabel,FormGroup, FormControl, Col, Row,Glyphicon } from 'react-bootstrap';
import { toast } from 'react-toastify';
import firebase from '../../firebase/Firebase';

class RecordsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        month: '',
        year: '',
        amount: 0,
        notes: '',
    };
      this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  submitNewRecord = () => {
    //setup
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    //adding to firebase
    db.collection(this.props.dbToConnect).add({
      monthyear: parseInt(this.convertToEpochSeconds()),
      amount: parseInt(this.state.amount),
      notes: this.state.notes
    }).then((snapshot) => {
      //successful submission of records
      toast.success('Record submiited to database', {
        position: "bottom-right",
        autoClose: 3000
      });

      //reset fields accordingly
      this.setDate();
      this.setActiveIncome();
    }).catch((error) => {
      //catching error
      toast.error('An error has occured, please try again later', {
        position: "bottom-right",
        autoClose: false
      });
    });
  }

  convertToEpochSeconds() {
    return new Date(this.state.year + "-" + this.getMonth(this.state.month) + "-01").getTime() / 1000;
  }

  componentWillMount = () => {
    this.setDate();
    this.setActiveIncome();
  }

  setActiveIncome = () => {
    if(this.props.salary && this.props.notes) {
      this.setState({
        amount: (this.props.salary),
        notes: this.props.notes
      });
    } else {
      this.setState({
        amount: 0,
        notes: ''
      });
    }
  }

  getMonth(monthStr){
    return new Date(monthStr+'-1-01').getMonth()+1
  }

  setDate = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    this.setState({
      month: monthNames[date.getMonth()],
      year: date.getFullYear()
    });
  }

  render() {
    return (
      <div>
      <Modal show={this.props.show} onHide={this.props.handleClose} bsSize='sm'>
        <Modal.Header>
          <Modal.Title>
            Add Record
          </Modal.Title>
          <span className="modal-subtitle">
            {this.props.dbToConnect==="ActiveIncome" ? "for active income" : "for passive income"}
          </span>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <Row>
                <Col md={6}>
                  <ControlLabel>MONTH</ControlLabel>
                    <FormControl componentClass="select" className="record-input" name="month"
                     value={this.state.month} onChange={this.handleInputChange} >
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </FormControl>
                </Col>
                <Col md={6}>
                  <ControlLabel>YEAR</ControlLabel>
                  <FormControl name="year" type="number" className="record-input" value={this.state.year}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </Row>

              <ControlLabel>AMOUNT</ControlLabel>
              <FormControl name="amount" type="number" className="record-input" value={this.state.amount}
                onChange={this.handleInputChange}
              />

              <ControlLabel>NOTES</ControlLabel>
              <FormControl name="notes" type="text" className="record-input" value={this.state.notes}
                onChange={this.handleInputChange}
              />

            </FormGroup>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <div id="record-modal-close" onClick={this.props.handleClose}>
            <Glyphicon glyph="remove" /> CLOSE
          </div>
          <div id="record-modal-submit" onClick={this.submitNewRecord}>
            <Glyphicon glyph="plus" /> SUBMIT
          </div>
        </Modal.Footer>


      </Modal>
      </div>
    )
  }
}

export default RecordsModal;
