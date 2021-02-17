import React from 'react';
import { StyleSheet, View,SafeAreaView } from 'react-native';
import Screen from './Screen';

export default class RenderScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            current_page: props.route.params.current_page,
            navigation: props.route.params.navigation
        }
    }
        
    render() {
      return (
        <SafeAreaView  style={styles.container}>
          <View style={styles.container}>
            <Screen
              page={this.state.current_page.component}
              title={this.state.current_page.title}
              has_header_button={this.state.current_page.has_header_button} 
              footer={this.state.current_page.footer_component } />
          </View>
        </SafeAreaView>
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
  