import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import pageStyles from '../../common/PageStyle.js';
import ChemistFooter from '../ChemistFooter';

export default class ChangePassword extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        
                    </View>
                    <View style={pageStyles.footer}>
                        <ChemistFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
