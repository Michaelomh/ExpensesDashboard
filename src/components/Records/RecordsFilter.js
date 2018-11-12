import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class RecordsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="record-panel">
          <Row className="record-filter-container">
            <Col xs={12} md={4}  onClick={this.props.handleClick('expense')}>
              <span className="record-filter-text" >Expenses</span>
            </Col>
            <Col xs={12} md={4}  onClick={this.props.handleClick('active')}>
              <span className="record-filter-text" >Active Income</span>
            </Col>
            <Col xs={12} md={4}  onClick={this.props.handleClick('passive')}>
              <span className="record-filter-text"  >Passive Income</span>
            </Col>
          </Row>
      </div>
    )
  }
}

export default RecordsFilter;
