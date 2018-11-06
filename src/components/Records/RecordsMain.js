import React, { Component } from 'react';
import {  } from 'react-bootstrap';
import RecordsFilter from './RecordsFilter';
import ExpensesPanel from './ExpensesPanel';
import SalaryPanel from './SalaryPanel';
import PassiveIncomePanel from './PassiveIncomePanel';
import TopBar from '../TopBar/TopBar';
import '../../styles/records.css';

class RecordsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <TopBar />
        <div className="container-fluid">
          <RecordsFilter />
          <div className="record-container">
            <ExpensesPanel />
            <SalaryPanel />
            <PassiveIncomePanel />
          </div>
        </div>
      </div>
    )
  }
}

export default RecordsMain;
