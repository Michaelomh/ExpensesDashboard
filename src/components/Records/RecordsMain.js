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
    db.collection('PassiveIncome').get()
    .then((snap) => {
      snap.docs.forEach(record => {
        //populate passive income field
        this.setState(prevState => ({
          passiveIncome: [...prevState.passiveIncome, record.data()]
        }))
      })
    })
    .finally(() => {
      db.collection('ActiveIncome').get().then((snap) => {
        snap.docs.forEach(record => {
          //populate active income fields
          this.setState(prevState => ({
            activeIncome: [...prevState.activeIncome, record.data()]
          }))
        })
      })
    });
  }

  handleClick(targetVal) {
    console.log(targetVal);
    // this.setState({
    //   inputValue: event.target.value
    // });
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
              className={this.state.showExpenses ? 'hidden' : ''}
            />
            <ActiveIncomePanel
              activeIncomeData = {this.state.activeIncome}
              className={this.state.showActive ? 'hidden' : ''}
            />
            <PassiveIncomePanel
              passiveIncomeData = {this.state.passiveIncome}
              className={this.state.showPassive ? 'hidden' : ''}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default RecordsMain;
