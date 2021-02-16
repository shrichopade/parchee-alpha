import React, { Component } from 'react';
import { View,SafeAreaView  } from 'react-native';
import { Container, Content, Button, Text,Body, Card, CardItem } from 'native-base';

import { dStyles } from '../styles/DefaultStyleSheet.js'
import { headerStyles } from './PatinetStyles.js'
import IconButton from './PatientFooter.js';

import Header from './PatientHeader.js';
// import Footer from './PatientFooter.js';
import ActivePrescription from './ActivePrescription';


const pages = {
    patient: {
      title: 'PatientHome',
      component: <PatientPage />,
      has_header_button: false
    }  
  };

  var current_page = pages.progress;

export default class PatientHome extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
            <Screen
              page={current_page.component}
              title={current_page.title}
              has_header_button={current_page.has_header_button} />
              <View style={styles.tabs_container}>
              <IconButton icon="event-note" />
              <IconButton icon="edit" />
              <IconButton icon="camera-alt" />
            </View>
          </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    tabs_container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#3e3e3e'
    }
  });