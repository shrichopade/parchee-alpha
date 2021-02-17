import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../../components/IconButton';

export default class DefaultFooter extends React.Component {

	render() {
		return (
			<View style={styles.tabs_container}>
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
    }
  });