import React from 'react';
import { SafeAreaView, View,Text, FlatList, StyleSheet } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import PatientFooter from './PatientFooter'
import list_styles from '../../components/List/styles';
import medication_data from '../../data/activeprescription';
import { renderItem } from '../../lib/general';
import PatientFooter from './PatientFooter';

export default class PatientHome extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={list_styles.list_item_header}>Morning</Text>
                        <FlatList data={medication_data} renderItem={renderItem} />
                        <Text style={list_styles.list_item_header}>Afternoon</Text>
                        <FlatList data={medication_data} renderItem={renderItem} />
                        <Text style={list_styles.list_item_header}>Night</Text>
                        <FlatList data={medication_data} renderItem={renderItem} /> 
                    </View>
                    <View style={pageStyles.footer}>
                        <PatientFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
