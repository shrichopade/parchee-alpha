import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

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
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Image source={require('../../../assets/images/parchee-logo.png')} 
                            style={styles.imageTitle} />
                        <AppTextInput
                            value={this.state.username}
                            onChangeText={(val) => this.inputValueUpdate(val, 'username')}
                            leftIcon="email-open"
                            placeholder="Enter email address"
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
                        <View style={styles.buttonContainer}>    
                            <AppButton title="Sign In" onPress={() => this.signIn()} />
                        </View>
                        <View style={styles.buttonParallel}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RequestOTP')}>
                                <Text style={styles.forgotPasswordButtonText}>
                                    Reset Password
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles.forgotPasswordButtonText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonParallel}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Image source={require('../../../assets/images/google.png')} 
                                    style={styles.imageButton} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Image source={require('../../../assets/images/facebook.png')} 
                                    style={styles.imageButton} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={pageStyles.footer}>
                        <DefaultFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    imageTitle:{
        width: 350,
        height: 150,
        alignSelf: 'center',
        marginVertical: 20
    },
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonParallel: {
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    forgotPasswordButtonText: {
        color: '#0000EE',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600'
    },
    imageButton:{
        width: 180,
        height: 40,
        alignSelf: 'center',
        marginVertical: 10
    },
});