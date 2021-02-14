import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Content, Text, Form, Item, 
  Input, Label, Card, CardItem, Button } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js';


export default class SignIn extends Component {

    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        usernameError: '',
        passwordError: ''
      }
    }

    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }

    signIn = () => {
        try {
            if(this.state.username == "P" || this.state.username == "p" ) {
              this.props.navigation.navigate('PatientHome')
            } else if(this.state.username == "D" || this.state.username == "d" ) {
              this.props.navigation.navigate('DoctorHome')
            } else if(this.state.username == "C" || this.state.username == "c" ) {
              this.props.navigation.navigate('ChemistHome', {orderStatus:'Open'})
            } else {
              this.props.navigation.navigate('PatientHome')
            }
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    render() {
      return (
          <Container style={dStyles.container}>
            <Content>
              <Image source={require('../images/parchee-logo.png')} style={dStyles.imageTitle} />
              <Card style={dStyles.cardStyle}>
                <CardItem style={dStyles.cardItemBodyStyle}>
                  <Form>
                    <Item stackedLabel>
                      <Label>Username (Email)</Label>
                      <Input value={this.state.username} 
                        keyboardType="email-address"
                        onChangeText={(val) => this.inputValueUpdate(val, 'username')} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Password</Label>
                      <Input value={this.state.password}  secureTextEntry
                        onChangeText={(val) => this.inputValueUpdate(val, 'password')}  />
                    </Item>
                    <Button success style={dStyles.buttonStyle} onPress={() => this.signIn()}>
                      <Text style={dStyles.buttonText}>Login</Text>
                    </Button>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RequestOTP')}>
                      <Text style={dStyles.linkText}>Forgot Password? Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                      <Text style={dStyles.linkText}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={dStyles.footerText}>Copyright Parchee, all rights reserved</Text>

                  </Form>
                </CardItem>
              </Card>
            </Content>
          </Container>
      );
    }
};