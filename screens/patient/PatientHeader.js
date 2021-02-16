import React, { Component } from 'react';
import { SafeAreaView  } from 'react-native';
import { Container,Header, Left, Body, Right, Button, Icon, Title, TextFooter, FooterTab, Text, Thumbnail } from 'native-base';
import { headerStyles } from './PatinetStyles.js'

export default class PatientHeader extends Component {
  render() {
    return (
      // <SafeAreaView styles={headerStyles.headerBgColor}>
          <Container>
            <Header style={headerStyles.headerBgColor} >
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigate('PatientHome')}>
                    <Icon name='arrow-back'style={{color: '#4CAF50'}} />                                      
                </Button>              
              </Left>
              <Body>
         
              </Body>
              <Right>
                <Button transparent >
                 {/* <Icon name='paper' /> */}
                    {<Thumbnail style={headerStyles.headerFooterIcon} 
                    small square source={require('../images/qrcode.png')}/> }
                </Button>
                <Button transparent >
                   {<Thumbnail style={headerStyles.headerFooterIcon} 
                   small source={require('../images/profile.jpg')}/> }
                   {/* <Icon name='person' /> */}
                 </Button>
              </Right>
            </Header>
          </Container>
      // </SafeAreaView>
    );
  }
}