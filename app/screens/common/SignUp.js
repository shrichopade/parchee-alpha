import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DefaultFooter from './DefaultFooter'

export default class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            givenNames: '',
            surname: '',
            mobileNumber: '',
            aadharCard: '',
            registrationNumber: ''
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
                            value={this.state.givenName}
                            onChangeText={(val) => this.inputValueUpdate(val, 'givenName')}
                            leftIcon="face"
                            placeholder="Enter First names"
                            autoCapitalize="words"
                            keyboardType="default"
                            textContentType="givenName"
                        />
                        <AppTextInput
                            value={this.state.surname}
                            onChangeText={(val) => this.inputValueUpdate(val, 'surname')}
                            leftIcon="face"
                            placeholder="Enter Surname"
                            autoCapitalize="words"
                            keyboardType="default"
                            textContentType="familyName"
                        />
                        
                        <AppTextInput
                            value={this.state.mobileNumber}
                            onChangeText={(val) => this.inputValueUpdate(val, 'mobileNumber')}
                            leftIcon="file-code"
                            placeholder="Enter mobile number"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="telephoneNumber"
                        />
                        <AppTextInput
                            value={this.state.aadharCard}
                            onChangeText={(val) => this.inputValueUpdate(val, 'aadharCard')}
                            leftIcon="file-code"
                            placeholder="Enter Aadhar number"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="creditCardNumber"
                        />
                        <AppTextInput
                            value={this.state.registrationNumber}
                            onChangeText={(val) => this.inputValueUpdate(val, 'registrationNumber')}
                            leftIcon="file-code"
                            placeholder="Enter Doctor/Chemist Reg No"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="creditCardNumber"
                        />
                        <View style={styles.buttonContainer}>    
                            <AppButton title="Register" 
                                onPress={() => this.props.navigation.navigate('ConfirmSignUp')} />
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
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
