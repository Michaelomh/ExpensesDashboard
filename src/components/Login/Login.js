import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  login = () => {
    console.log("login!");
    //check connect to firebase
    //check login if false, return error, if true go to dashboard
    //go to dashboard
    this.setState(() => ({
      redirectToReferrer: true
    }))
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/overview' }}
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <Form>
          <FormGroup>
            <FormControl name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Username" />
            <FormControl name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
            <Button bsStyle="primary" onClick={this.login}>Primary</Button>
          </FormGroup>
        </Form>
        {/*{this.state.username} <br/>
        {this.state.password}*/}
      </div>
    );
  }
}

export default Login;
