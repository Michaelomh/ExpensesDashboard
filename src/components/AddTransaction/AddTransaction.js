import React, { Component } from 'react';
import '../../styles/add.css';
import { Button, Grid, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      amount: '',
      description: '',
      category: '',
      moveToOverview: false,
      currentAmt: 0
    };
  }

  moveToOverview = () => {
    console.log("move to Overview");
    this.setState(() => ({
      moveToOverview: true
    }))
  }

  componentWillMount= () => {
    console.log("component will mount");

    //populate date
    let today = new Date();
    let day = (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());
    let month = (today.getMonth() + 1 < 10 ? '0' + today.getMonth() + 1 : today.getMonth() + 1);

    //populate time
    let hour = (today.getHours() < 10 ? '0' + today.getHours() : today.getHours());
    let minute = (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes());

    this.setState({
      date: day + "/" + month,
      time: hour + ":" + minute,
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleCalculator = (event) => {
    let { currentAmt } = this.state;
    let char = event.target.id[event.target.id.length - 1];
    console.log(char)
    console.log(currentAmt);

    if (char === 'l') {
        //delete
        if (currentAmt.length === 1 || currentAmt === 0) {
          this.setState(() => ({
            currentAmt: 0
          }))
        } else {
          this.setState(() => ({
            currentAmt: this.state.currentAmt.toString().substr(0, this.state.currentAmt.length - 1)
          }))
        }
    } else if (char === 't') {
        //add a dot
        //if dot exist, ignore
        if (!currentAmt.includes(".")) {
            if (currentAmt.length === 0) {
                console.log("hit - " + "0" + currentAmt + ".")
                this.setState(() => ({
                  currentAmt: "0" + this.state.currentAmt + "."
                }))
            } else {
              this.setState(() => ({
                currentAmt: this.state.currentAmt + "."
              }))
            }
        }
    } else {
        //number
        //if there are more than 2 decimal point, ignore.
        //if the first digit is 0, without a dot, remove the 0
        if (currentAmt.toString().substr(currentAmt.toString().indexOf("."), currentAmt.length - 1).length > 2) {
          console.log("too much decimals");
        } else if (currentAmt.toString().substr(0, 1) === "0" && !currentAmt.toString().includes(".")) {
          this.setState(() => ({
            currentAmt: this.state.currentAmt.toString().substr(1, this.state.currentAmt.length) + char
          }))
        } else {
          this.setState(() => ({
            currentAmt: this.state.currentAmt + char
          }))
        }
    }

    //change setings accoridngly
    //get new transactionAmount
    //change settings accordingly.
    let newCurrentAmt = this.state.currentAmt;

    if (newCurrentAmt.length > 9) {
        //cut down, error
        console.log("Error hit");
        this.setState(() => ({
          currentAmt: this.state.currentAmt.toString().substr(0, this.state.currentAmt.length - 1)
        }))
    } else if (newCurrentAmt.length > 6) {
        //make it smaller
          // $("#transaction-amt").css("font-size", "3em");
          // $("#transaction-amt").css("line-height", "4.5em");
          console.log("make it smaller");
    } else {
        //make it bigger
        // $("#transaction-amt").css("font-size", "4em");
        // $("#transaction-amt").css("line-height", "3em");
        console.log("make it bigger");
    }

  }

  handleAddingTransaction = () => {
    console.log("adding transaction");
    toast.success('Record submiited to database', {
      position: "bottom-right",
      autoClose: 3000
    });
  }

  render() {
    const { moveToOverview } = this.state

    if (moveToOverview === true) {
      const { from } = { from: { pathname: '/overview' }}
      return <Redirect to={from} />
    }

    return (
      <div className="Add-Container">
        <Grid style={{padding: "0px"}}>
          <Row>
            <Col xs={12} className="add-row-title add-row">  
              <h1 onClick={this.moveToOverview}>
                  Add Transaction
              </h1>
            </Col>
          </Row>

          <Row className="add-row-mainRow add-row">
            <Col xs={3}>  
              <h3>Add</h3>
              <h2>SGD</h2>
            </Col>
            <Col xs={9}>  
              <span id="transaction-amt">{this.state.currentAmt}</span>
            </Col>
          </Row>

          <Row className="add-row-form add-row">
            <Col xs={12}>  
              <input type="text" className="form-control form-notes" name="description" placeholder="description" value={this.state.description} onChange={this.handleInputChange} autoComplete="off"/>
            </Col>
          </Row>

          <Row className="add-row-form add-row">
            <Col xs={6}>  
            <input type="text" className="form-control form-date" name="date" placeholder="DD/MM" 
               value={this.state.date} onChange={this.handleInputChange} />
            </Col>
            <Col xs={6}>  
            <input type="text" className="form-control form-time" name="time" placeholder="HH:MM" 
              value={this.state.time} onChange={this.handleInputChange} />
            </Col>
          </Row>

          <Row className="add-row-category add-row">
            <Col xs={4}>
              <Button type="button" className="btn btn-active btn-outline-secondary">Food</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" className="btn btn-outline-secondary">Transport</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" className="btn btn-outline-secondary">Holidays</Button>
            </Col>
          </Row>

        <Row className="add-row-category add-row">
            <Col xs={4}>
              <Button type="button" className="btn btn-outline-secondary">Activities</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" className="btn btn-outline-secondary">Shopping</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" className="btn btn-outline-secondary">Others</Button>
            </Col>
          </Row>

          <Row style={{marginTop: "15px"}}>
            <Col xs={9}>  
              <Row className="add-row add-row-calculator" onClick={this.handleCalculator}>
                <Col xs={4} id="calc-7">7</Col>
                <Col xs={4} id="calc-8">8</Col>
                <Col xs={4} id="calc-9">9</Col>
              </Row>
              <Row className="add-row add-row-calculator" onClick={this.handleCalculator}>
                <Col xs={4} id="calc-4">4</Col>
                <Col xs={4} id="calc-5">5</Col>
                <Col xs={4} id="calc-6">6</Col>
              </Row>
              <Row className="add-row add-row-calculator" onClick={this.handleCalculator}>
                <Col xs={4} id="calc-1">1</Col>
                <Col xs={4} id="calc-2">2</Col>
                <Col xs={4} id="calc-3">3</Col>
              </Row>
              <Row className="add-row add-row-calculator" onClick={this.handleCalculator}>
                <Col xs={4} id="calc-dot">.</Col>
                <Col xs={4} id="calc-0">0</Col>
                <Col xs={4} id="calc-del">-</Col>
              </Row>
            </Col>
            <Col xs={3}>
              <div className="add-row add-row-templates">
                <div>T1</div>
                <div>T2</div>
                <div>T3</div>
              </div>
              <div className="add-row add-row-calculator">
                <div onClick={this.handleAddingTransaction}><p id="calc-add">Add</p></div>
              </div>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default AddTransaction;
