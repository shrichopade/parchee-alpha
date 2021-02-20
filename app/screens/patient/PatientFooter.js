import React from 'react';
import { TouchableHighlight,View, StyleSheet } from 'react-native';
import IconButton from '../../components/IconButton';

export default class PatientFooter extends React.Component {

	render() {
		return (
			<View style={styles.tabs_container}>
              <IconButton icon="event-note" />
              <IconButton icon="qr-code-2" />
              <IconButton icon="file-upload" />
              <IconButton icon="logout" />
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