import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import pageStyles from '../../common/PageStyle.js';
import ChemistFooter from '../ChemistFooter';

export default class ManagePersonalInfo extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.pageTitle}>MANAGE PERSONAL INFORMATION</Text>
                    </View>
                    <View style={pageStyles.footer}>
                        <ChemistFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
