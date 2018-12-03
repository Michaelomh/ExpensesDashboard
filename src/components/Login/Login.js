import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Grid, Col, Row, Image,ControlLabel } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'michaelomh',
      password: 'Guardian07',
      redirectToReferrer: false,
      showError: 'None',
      errorMsg: '',
      mobile: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 480) {
      this.setState(() => ({
        redirectToReferrer: true,
        mobile: true
      }))
    }
  }

  login = () => {
    if (this.state.password === 'Guardian07') {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    } else {
      this.setState(() => ({
        errorMsg: 'Incorrect Username/Password',
        showError: 'block'
      }))
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.login();
    }
  }

  render() {
    const { redirectToReferrer, mobile } = this.state

    if (redirectToReferrer === true && mobile === false) {
      const { from } = { from: { pathname: '/overview' }}
      return <Redirect to={from} />
    } else if (redirectToReferrer === true && mobile === true) {
      const { from } = { from: { pathname: '/add' }}
      return <Redirect to={from} />
    }

    return (
      <div className="login-container">
        <Grid>
          <Row>
            <Col xs={10} xsPush={1} md={4} mdPush={4}>
            <Image responsive src={require('../../img/Expenyse Logo (Green) + Text.png')} className="login-logo" />
            <Form>
              <FormGroup className="login-form-group">
                <ControlLabel>USERNAME</ControlLabel>
                <FormControl name="username" type="text" value={this.state.username} onChange={this.handleInputChange} autoComplete="off"/>
                <ControlLabel>PASSWORD</ControlLabel>
                <FormControl name="password" type="password" value={this.state.password} onChange={this.handleInputChange} onKeyDown={this.onEnterPress}/>
                <Button bsStyle="primary" onClick={this.login}>LOGIN</Button>
                <div className="login-error" style={{display: this.state.showError}}>
                  <span>{this.state.errorMsg}</span>
                </div>
              </FormGroup>
            </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
