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
            gender: 'M',
            dateOfBirth: '',
            mobileNumber: '',
            aadharCard: '',
            yourStatus: 'P',
            registrationNumber: '',
            checked: 'unchecked'
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
                        <RadioButton.Group onValueChange={(val) => this.inputValueUpdate(val, 'gender')} value={this.state.gender}>
                            <View style={styles.buttonParallel}>
                                <RadioButton value="M" />
                                <Text style={styles.radioText}>Male</Text>
                                <RadioButton value="F" />
                                <Text style={styles.radioText}>Female</Text>
                            </View>
                        </RadioButton.Group>
                        <AppDateTextMask
                            type={'datetime'}
                            leftIcon="file-code"
                            options={{format: 'DD/MM/YYYY'}}
                            value={this.state.dateOfBirth}
                            placeholder="Enter Date of Birth (DD/MM/YYYY)"
                            onChangeText={(val) => this.inputValueUpdate(val, 'dateOfBirth')}
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
                            value={this.state.registrationNumber}
                            onChangeText={(val) => this.inputValueUpdate(val, 'registrationNumber')}
                            leftIcon="file-code"
                            placeholder="Enter Doctor/Chemist Reg No"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            textContentType="creditCardNumber"
                        />
                        <View style={styles.buttonParallel}>
                            <Checkbox
                                status={this.state.checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    inputValueUpdate(!this.state.checked);
                                }}
                            />
                            <Text style={styles.radioText}>Accept Terms and Conditions</Text>
                        </View>
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
