import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import pageStyles from '../../common/PageStyle.js';
import AppButton from '../../../components/AppButton';
import ChemistFooter from '../ChemistFooter';

export default class ManageProfile extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.pageTitle}>MANAGE PROFILE</Text>
                        <AppButton title="Manage Personal Info" onPress={this.props.navigation.navigate('ChemistManagePersonalInfo')} />
                        <AppButton title="Change Password" onPress={this.props.navigation.navigate('ChemistChangePassword')} />
                        <AppButton title="Manage Settings" onPress={this.props.navigation.navigate('ChemistManageSettings')} />
                        <AppButton title="Log out" onPress={this.props.navigation.navigate('SignIn')} />
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
});
