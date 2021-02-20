import React from 'react';
import { SafeAreaView, View,Text, FlatList, StyleSheet } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import PatientFooter from './PatientFooter'
import list_styles from '../../components/List/styles';
import medication_data from '../../data/activeprescription';
import appointment_data from '../../data/patientappointments';
import order_data from '../../data/patientorders';
import { renderItem,renderItemAppointment,renderItemOrders,renderPrescriptionItem } from '../../lib/general';

export default class PatientHome extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={list_styles.list_item_header}>Medication</Text>
                        <FlatList data={medication_data} renderItem={renderPrescriptionItem} />
                        <Text style={list_styles.list_item_header}>Appointments</Text>
                        <FlatList data={appointment_data} renderItem={renderItemAppointment} />
                        <Text style={list_styles.list_item_header}>Orders</Text>
                        <FlatList data={order_data} renderItem={renderItemOrders} /> 
                        
                    </View>
                    <View style={pageStyles.footer}>
                        <PatientFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
