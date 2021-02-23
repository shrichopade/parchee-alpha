import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { RadioButton, Text, Checkbox  } from 'react-native-paper';

import pageStyles from '../../common/PageStyle.js';
import ChemistFooter from '../ChemistFooter';
import AppTextInput from '../../../components/AppTextInput';
import AppDateTextMask from '../../../components/AppDateTextMask';

export default class ManagePersonalInfo extends React.Component {

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
                        <Text style={styles.pageTitle}>MANAGE PERSONAL INFORMATION</Text>
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
                        <Button success style={styles.buttonStyle} title="Submit" 
                            onPress={() => this.props.navigation.navigate('ChemistConfirmChanges')}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Button>
                    </View>
                    <View style={pageStyles.footer}>
                        <ChemistFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    pageTitle: {
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        backgroundColor: '#93cf96'
    },
    buttonStyle: {
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 5,
        width: '20%'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
});
