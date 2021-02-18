import React from 'react';
import { SafeAreaView, View,Text, FlatList, StyleSheet } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import DoctorFooter from './DoctorFooter'
import list_styles from '../../components/List/styles';
import medication_data from '../../data/activeprescription';
import { renderItem } from '../../lib/general';

export default class DoctorHome extends React.Component {

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
                        <DoctorFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
