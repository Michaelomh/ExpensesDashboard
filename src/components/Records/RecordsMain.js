import React, { Component } from 'react';
import {  } from 'react-bootstrap';
import RecordsFilter from './RecordsFilter';
import ExpensesPanel from './ExpensesPanel';
import ActiveIncomePanel from './ActiveIncomePanel';
import PassiveIncomePanel from './PassiveIncomePanel';
import TopBar from '../TopBar/TopBar';
import '../../styles/records.css';
import firebase from '../../firebase/Firebase';

class RecordsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeIncome: [],
        passiveIncome: [],
        showExpenses: true,
        showActive: true,
        showPassive: true
    };
  }

  componentWillMount() {
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    //get all passive and active Income
    this.queryPassiveIncome(db);
    this.queryActiveIncome(db);
    this.queryExpenses(db);
  }

  queryActiveIncome(db) {
    this.setState({
      activeIncome: []
    })

    db.collection('ActiveIncome').get().then((snap) => {
      snap.docs.forEach(record => {
        //populate active income fields
        this.setState(prevState => ({
          activeIncome: [...prevState.activeIncome, record.data()]
        }))
      })
    })
  }

  queryPassiveIncome(db) {
    this.setState({
      passiveIncome: []
    })
    
    db.collection('PassiveIncome').get().then((snap) => {
      snap.docs.forEach(record => {
        //populate passive income field
        this.setState(prevState => ({
          passiveIncome: [...prevState.passiveIncome, record.data()]
        }))
      })
    })
  }

  queryExpenses(db) {
    this.setState({
      expenses: []
    })

    db.collection('Expenses').get().then((snap) => {
      snap.docs.forEach(record => {
        //populate active income fields
        this.setState(prevState => ({
          expenses: [...prevState.expenses, record.data()]
        }))
      })
    })
  }

  handleClick(targetVal) {

  };

  handleClose(targetVal) {
    if (targetVal === "ActiveIncome") {
      const db = firebase.firestore();
      db.settings({ timestampsInSnapshots: true });
      this.queryActiveIncome(db);
    } else if (targetVal === "PassiveIncome") {
      const db = firebase.firestore();
      db.settings({ timestampsInSnapshots: true });
      this.queryPassiveIncome(db);
    } else {
      console.log("E")
    }
  };

  render() {
    return (
      <div>
        <TopBar />
        <div className="container-fluid">
          <div>
            <RecordsFilter handleClick={this.handleClick}/>
          </div>
          <div className="record-container">
            <ExpensesPanel
              expensesData = {this.state.expenses}
              className={this.state.showExpenses ? 'hidden' : ''}
            />
            <ActiveIncomePanel
              activeIncomeData = {this.state.activeIncome}
              className={this.state.showActive ? 'hidden' : ''}
              panelType='ActiveIncome'
              handleClose = {this.handleClose.bind(this, 'ActiveIncome')}
            />
            <PassiveIncomePanel
              passiveIncomeData = {this.state.passiveIncome}
              className={this.state.showPassive ? 'hidden' : ''}
              panelType='PassiveIncome'
              handleClose = {this.handleClose.bind(this, 'PassiveIncome')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default RecordsMain;
