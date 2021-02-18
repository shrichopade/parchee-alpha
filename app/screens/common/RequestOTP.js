import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

export default class RequestOTP extends React.Component {
    constructor() {
      super();
      this.state = {
        username: ''
      }
    }
  
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    validateInput() {
      if(this.state.username === '') {
        alert('User name is mandatory')
      }
    }
  
    render() {
      return (
        <SafeAreaView  style={pageStyles.container}>
            <View style={pageStyles.screen}>
                <View style={pageStyles.body}>
                    <AppTextInput
                        value={this.state.username}
                        onChangeText={(val) => this.inputValueUpdate(val, 'username')}
                        leftIcon="email-open"
                        placeholder="Enter username"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        />
                    <View style={styles.buttonContainer}>    
                        <AppButton title="Send Code" 
                            onPress={() => this.props.navigation.navigate('ResetPassword')} />
                    </View>
                </View>
                <View style={pageStyles.footer}>
                    <DefaultFooter navigation={this.props.navigation}/>
                </View>
            </View>
        </SafeAreaView>
      )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});