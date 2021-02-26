import React from 'react';
import { TouchableHighlight,View, StyleSheet, Text } from 'react-native';
import IconButton from '../../components/IconButton';
import { Button, Icon } from 'native-base';

export default class PatientFooter extends React.Component {

	render() {
		return (
      <View style={styles.tabs_container}>
      <View>
         <Button  style={styles.buttonStyle} 
                vertical onPress={() => this.props.navigation.navigate('SendtoChemist')}>
                <Icon name="send" />
              <Text style={styles.buttonText}>Send to Chemist</Text>
         </Button>
      </View>
      <View>  
        <Button  style={styles.buttonStyle} 
          vertical onPress={() => this.props.navigation.navigate('PatientHome')}>
          <Icon name="film" />
        </Button>
        <Text style={styles.buttonText}>QR Code</Text>
      </View>
      <View>
        <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('UploadPrescription')}>
              <Icon name="ios-cloud-upload-outline" />
              <Text style={styles.buttonText}>Load Parchee</Text>
         </Button>
      </View>
      <View>  
        <Button  style={styles.buttonStyle} 
          vertical onPress={() => this.props.navigation.navigate('PatientHome')}>
          <Icon name="film" />
        </Button>
        <Text style={styles.buttonText}>Appointments</Text>
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
      backgroundColor: '#4CAF50'
      // backgroundColor: '#3e3e3e'
    },
    buttonStyle:{
      backgroundColor: '#4CAF50'
    },
    buttonText: {
      fontFamily: 'Arial',
      fontSize: 12,
      alignSelf: 'center',
      color: '#fff'
    }
  });