import React from 'react';
import { TouchableHighlight,View, StyleSheet, Text } from 'react-native';
import IconButton from '../../components/IconButton';
import { Button, Icon } from 'native-base';

export default class PatientFooter extends React.Component {

	render() {
		return (
      <View style={styles.tabs_container}>
      <View>
        <IconButton icon="event-note" />
        <Text style={styles.buttonText}>Note</Text> 
      </View>
      <View>  
        <IconButton icon="qr-code-2" />
        <Text style={styles.buttonText}>QR Code</Text>
      </View>
      <View>
       {/*} <IconButton icon="file-upload" />
        <Text style={styles.buttonText}>Upload</Text>*/}
        <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('UploadPrescription')}>
              <Icon name="file-upload" />
         </Button>
      </View>
      <View>
        <IconButton icon="logout" />
        <Text style={styles.buttonText}>Logout</Text>
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