import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

import pageStyles from '../../common/PageStyle.js';
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
                        <Button success iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('ChemistManagePersonalInfo')}>
                            <Icon name='person' />
                            <Text style={styles.buttonText}>Manage Personal Info</Text>
                        </Button>
                        <Button warning iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('ChemistChangePassword')}>
                            <Icon name='keypad' />
                            <Text style={styles.buttonText}>Change Password</Text>
                        </Button>
                        <Button primary iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('ChemistManageSettings')}>
                            <Icon name='settings' />
                            <Text style={styles.buttonText}>Manage Settings</Text>
                        </Button>
                        <Button danger iconLeft style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('SignIn')}>
                            <Icon name='navigate' />
                            <Text style={styles.buttonText}>Log out</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 15,
        width: '30%'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
});
