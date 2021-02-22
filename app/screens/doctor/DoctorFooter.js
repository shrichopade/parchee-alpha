import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text  } from 'react-native-paper';
import { Button, Icon } from 'native-base';

export default class DoctorFooter extends React.Component {

	render() {
		return (
			  <View style={styles.tabs_container}>
          <View>
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('OldOrders')}>
              <Icon name="medkit" />
            </Button>
            <Text style={styles.buttonText}>Prescribe</Text>
          </View>
          <View>  
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('OldOrders')}>
              <Icon name="film" />
            </Button>
            <Text style={styles.buttonText}>Scan QR</Text>
          </View>
          <View>
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('OldOrders')}>
              <Icon name="eye" />
            </Button>
            <Text style={styles.buttonText}>Refer</Text>
          </View>
          <View>
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('OldOrders')}>
              <Icon name="bookmarks" />
            </Button>            
            <Text style={styles.buttonText}>Sick Note</Text>
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