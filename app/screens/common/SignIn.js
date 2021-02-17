import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';

import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';

export default class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
          username: '',
          password: ''
        }
      }

    signIn = () => {
        try {
            if(this.state.username == "P" || this.state.username == "p" ) {
              this.props.navigation.navigate('PatientHome')
            } else if(this.state.username == "D" || this.state.username == "d" ) {
              this.props.navigation.navigate('DoctorHome')
            } else if(this.state.username == "C" || this.state.username == "c" ) {
              this.props.navigation.navigate('ChemistHome', {orderStatus:'Open'})
            } else {
              this.props.navigation.navigate('PatientHome')
            }
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    render() {
        return (
            <View>
                <Image source={require('../../../assets/images/parchee-logo.png')} 
                    style={styles.imageTitle} />
                <AppTextInput
                    value={this.state.username}
                    onChangeText={(val) => this.inputValueUpdate(val, 'username')}
                    leftIcon="email-open"
                    placeholder="Enter username"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
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
                <AppButton style={styles.appButtonStyle} title="Login" onPress={() => this.signIn()} />
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPasswd')}>
                    <Text style={styles.forgotPasswordButtonText}>
                        Forgot Password? Reset Password
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.forgotPasswordButtonText}>
                            Don't have an account? Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageTitle:{
        width: 350,
        height: 150,
        alignSelf: 'center',
        marginVertical: 8
    },
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: '#202020',
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: '400',
        alignSelf: 'center',
        marginVertical: 8
    },
    forgotPasswordButtonText: {
        color: '#8B918D',
        fontSize: 16,
        fontWeight: '600'
    },
});