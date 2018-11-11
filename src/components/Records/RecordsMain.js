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
        passiveIncome: []
    };
  }

  componentWillMount() {
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    //get all passive Income
    db.collection('ActiveIncome').get().then((snap) => {
      snap.docs.forEach(record => {
        //populate passive income fields
        console.log(record.data());
        this.state.activeIncome.push(record.data());
      })
    })
    .finally(() => {
      console.log("Finally happened - active;");
    });

    //get all active Income
    db.collection('PassiveIncome').get()
    .then((snap) => {
      snap.docs.forEach(record => {
        //populate active income field
        console.log(record.data());
        this.state.passiveIncome.push(record.data());
      })
    })
    .finally(() => {
      console.log("Finally happened - passive;");
    });
  }

  render() {
    return (
      <div>
        <TopBar />
        <div className="container-fluid">
          <RecordsFilter />
          <div className="record-container">
            <ExpensesPanel />
            <ActiveIncomePanel
              activeIncomeData = {this.state.activeIncome}
            />
            <PassiveIncomePanel
              passiveIncomeData = {this.state.passiveIncome}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default RecordsMain;
