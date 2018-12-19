import React, { Component } from 'react';
import '../../styles/add.css';
import { Button, Grid, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import firebase from '../../firebase/Firebase';

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      description: '',
      category: 'Food',
      moveToOverview: false,
      currentAmt: 0,
      fontSize: '4em', 
      lineHeight: '3em'
    };
  }

  //Misc Functions
  moveToOverview = () => {
    this.setState(() => ({
      moveToOverview: true
    }))
  }

  componentWillMount= () => {
    this.setState({
      date: this.populateDateTime(true),
      time: this.populateDateTime(false)
    });
  }

  populateDateTime(toggleFlag) {
    let today = new Date();

    //if true, get date, else time
    if (toggleFlag) {
      let day = (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());
      let month = (today.getMonth() + 1 < 10 ? '0' + today.getMonth() + 1 : today.getMonth() + 1);
      return day + '/' + month
    } else {
      let hour = (today.getHours() < 10 ? '0' + today.getHours() : today.getHours());
      let minute = (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes());
      return hour + ':' + minute
    }
  }

  convertToEpochSeconds() {
    return new Date(new Date().getFullYear(),
        parseInt(this.state.date.substr(3,2)),
        parseInt(this.state.date.substr(0,2)),
        parseInt(this.state.time.substr(3,2)),
        parseInt(this.state.time.substr(0,2)),
        0).getTime() / 1000;
  }

  //Handling Function
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleCategory = (event) => {
    let category = event.target.id;
    this.setState(() => ({
      category: category
    }))

    var els = document.querySelectorAll('.btn-outline-secondary')
    //remove btn-active classname
    els.forEach(function(entry) {
      entry.classList.remove('btn-active');
    });
    
    //add btn-active to classname
    event.target.classList.add('btn-active');

  }

  handleCalculator = (event) => {
    let { currentAmt } = this.state;
    let char = event.target.id[event.target.id.length - 1];

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
        if (!currentAmt.toString().includes(".")) {
            if (currentAmt.length === 0) {
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

    if (newCurrentAmt.length === 9) {
        //cut down, error
        if (char === 'l') {
          this.setState(() => ({
            currentAmt: this.state.currentAmt.toString().substr(0, this.state.currentAmt.length - 1)
          }))
        } else {
          this.setState(() => ({
            currentAmt: newCurrentAmt
          }))
        }
    } else if (newCurrentAmt.length > 6) {
        //make it smaller
          this.setState(() => ({
            fontSize: '3.5em',
            lineHeight: '3.5em'
          }))
    } else {
        //make it bigger
        this.setState(() => ({
          fontSize: '4em',
          lineHeight: '3em'
        }))
    }

  }

  handleAddingTransaction = () => {
    //firebase settings
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    db.collection("Expenses").add({
      timestamp: parseInt(this.convertToEpochSeconds()),
      description: this.state.description,
      category: this.state.category,
      amount: parseFloat(this.state.currentAmt),
    }).then((snapshot) => {
      //successful submission of records
      toast.success('Record submitted to database', {
        position: "bottom-right",
        autoClose: 1500
      });

      
      //reset fields
      this.setState({
        date: this.populateDateTime(true),
        time: this.populateDateTime(false),
        description: '',
        category: 'Food',
        currentAmt: 0
      });

      var btnClassNames = document.querySelectorAll('.btn-outline-secondary');
      //remove btn-active classname
      btnClassNames.forEach(function(entry) {
        if(entry.id === 'Food') {
          entry.classList.add('btn-active');
        } else {
        entry.classList.remove('btn-active');
        }
      });
    }).catch((error) => {
      //catching error
      toast.error('An error has occured, please try again later', {
        position: "bottom-right",
        autoClose: false
      });
    });
  }

  handleTemplate = (event) => {
    let templateSelected = parseInt(event.target.id.substr(event.target.id.length-1,3));

    switch (templateSelected) {
      case 1:
        //coffee template
        this.setState(() => ({
          currentAmt: 2,
          description: 'Coffee',
          category: 'Food',
        }))
        break; 
      case 2:
        //Meal template
        this.setState(() => ({
          currentAmt: 0,
          description: 'Meal',
          category: 'Food',
        }))
        break;
      case 3:
        //blank template
        this.setState(() => ({
          currentAmt: 0,
          description: '',
          category: 'Food',
        }))
        break;
      case 4:
        //blank template
        this.setState(() => ({
          currentAmt: 0,
          description: '',
          category: 'Food',
        }))
        break;
      case 5:
        //blank template
        this.setState(() => ({
          currentAmt: 0,
          description: '',
          category: 'Food',
        }))
        break;
      case 6:
        //blank template
        this.setState(() => ({
          currentAmt: 0,
          description: '',
          category: 'Food',
        }))
        break;
      case 7:
        //blank template
        this.setState(() => ({
          currentAmt: 0,
          description: '',
          category: 'Food',
        }))
        break;        
      default: 
      console.log("error, template not set up yet");
        break;
    }
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
              <span id="transaction-amt" style={{fontSize: this.state.fontSize, lineHeight: this.state.lineHeight}}>{this.state.currentAmt}</span>
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
              <Button type="button" id="Food" className="btn btn-active btn-outline-secondary" onClick={this.handleCategory}>Food</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" id="Transport" className="btn btn-outline-secondary" onClick={this.handleCategory}>Transport</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" id="Holidays" className="btn btn-outline-secondary" onClick={this.handleCategory}>Holidays</Button>
            </Col>
          </Row>

        <Row className="add-row-category add-row">
            <Col xs={4}>
              <Button type="button" id="Activities" className="btn btn-outline-secondary" onClick={this.handleCategory}>Activities</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" id="Shopping" className="btn btn-outline-secondary" onClick={this.handleCategory}>Shopping</Button>
            </Col>

            <Col xs={4}>
              <Button type="button" id="Others" className="btn btn-outline-secondary" onClick={this.handleCategory}>Others</Button>
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
            <Col xs={3} style={{paddingLeft: '0px'}}>
              <div className="add-row add-row-templates">
                <div className="template-box" id="template-1" onClick={this.handleTemplate}>Coffee</div>
                <div className="template-box" id="template-2" onClick={this.handleTemplate}>Meals</div>
                <div className="template-box" id="template-3" onClick={this.handleTemplate}>T3</div>
                <div className="template-box" id="template-4" onClick={this.handleTemplate}>T4</div>
                <div className="template-box" id="template-5" onClick={this.handleTemplate}>T5</div>
                <div className="template-box" id="template-6" onClick={this.handleTemplate}>T6</div>
                <div className="template-box" id="template-7" onClick={this.handleTemplate}>T7</div>
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
