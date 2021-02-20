import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../../components/IconButton';
import { Text  } from 'react-native-paper';
import { Button, Icon } from 'native-base';

export default class ChemistFooter extends React.Component {

	render() {
		return (
			  <View style={styles.tabs_container}>
          <View>
            <Button  style={styles.buttonStyle} 
              vertical onPress={() => this.props.navigation.navigate('OldOrders')}>
              <Icon name="apps" />
            </Button>
            <Text style={styles.buttonText}>Old Orders</Text>
          </View>
          <View>  
            <IconButton icon="qr-code-2" />
            <Text style={styles.buttonText}>Note</Text>
          </View>
          <View>
            <IconButton icon="camera-alt" />
            <Text style={styles.buttonText}>Note</Text>
          </View>
          <View>
            <IconButton icon="logout" />
            <Text style={styles.buttonText}>Note</Text>
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