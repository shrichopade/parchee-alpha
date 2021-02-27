import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { RadioButton, Text, Checkbox  } from 'react-native-paper';

import pageStyles from './PageStyle.js'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import AppDateTextMask from '../../components/AppDateTextMask';
import DefaultFooter from './DefaultFooter'

export default class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            givenNames: '',
            surname: '',
            mobileNumber: '',
            referalId: '',
            yourStatus: 'P',
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
                        <RadioButton.Group onValueChange={(val) => this.inputValueUpdate(val, 'yourStatus')} value={this.state.yourStatus}>
                            <View style={styles.buttonParallel}>
                                <RadioButton value="P" />
                                <Text style={styles.radioText}>Patient</Text>
                                <RadioButton value="D" />
                                <Text style={styles.radioText}>Doctor</Text>
                                <RadioButton value="C" />
                                <Text style={styles.radioText}>Chemist</Text>
                            </View>
                        </RadioButton.Group>
                        <AppTextInput
                            value={this.state.referalId}
                            onChangeText={(val) => this.inputValueUpdate(val, 'referalId')}
                            leftIcon="file-code"
                            placeholder="Enter Referral ID"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="creditCardNumber"
                        />
                        <View style={styles.buttonContainer}>    
                            <AppButton title="Confirm" 
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
    },
    buttonParallel: {
        flex: 0,
        flexDirection: 'row',
    },
    radioText: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#808080'
    }
});
