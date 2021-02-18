import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

export default class ResetPassword extends React.Component {

    constructor() {
        super();
        this.state = {
          passcode: '',
          password: '',
          confirmPassword: ''
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <AppTextInput
                            value={this.state.passcode}
                            onChangeText={(val) => this.inputValueUpdate(val, 'passcode')}
                            leftIcon="file-code"
                            placeholder="Enter passcode"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="oneTimeCode"
                            />
                        <AppTextInput
                            value={this.state.password}
                            onChangeText={(val) => this.inputValueUpdate(val, 'password')}
                            leftIcon="lock"
                            placeholder="Enter password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            />
                        <AppTextInput
                            value={this.state.confirmPassword}
                            onChangeText={(val) => this.inputValueUpdate(val, 'confirmPassword')}
                            leftIcon="lock"
                            placeholder="Confirm password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                            />
                        <View style={styles.buttonContainer}>    
                            <AppButton title="Reset Password" 
                                onPress={() => this.props.navigation.navigate('SignIn')} />
                        </View>
                    </View>
                    <View style={pageStyles.footer}>

                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});