import React from 'react';
import { SafeAreaView, View,Text, FlatList, StyleSheet,TouchableHighlight, Image } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import PatientFooter from './PatientFooter'
import list_styles from '../../components/List/styles';
import medication_data from '../../data/activeprescription';
import appointment_data from '../../data/patientappointments';
import order_data from '../../data/patientorders';
import styles from '../../lib/styles';
import IconButton from '../../components/IconButton';

// import { renderItem,renderItemAppointment,renderItemOrders,renderPrescriptionItem,renderItemTrial } from '../../lib/general';

export default class PatientHome extends React.Component {

    constructor() {
        super();
    }

    renderItemOrders({item}) {
        return (
        //   <TouchableHighlight underlayColor="#ccc" onPress={() => { 
                // console.log('order pressed!'); item.props.navigation.navigate('PatientOrderDetails')  }} style={styles.list_item}    >
            
                    <View key={item.key} style={styles.itemContainer}>
                        <View style={styles.nameContainer}>
                            <Image source={item.status_image} resizeMode='contain'
                                    style={styles.statusImage} />
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                          <Text style={styles.patientText}>{item.patient}</Text>
                          <Text style={styles.doctorText}>{item.doctor}</Text>
                          <Text style={styles.dueDateText}>{item.due_date}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Image source={require('../../../assets/images/show-more.png')} 
                            style={styles.moreImage} />
                        </View>
                    </View>
               
        //   </TouchableHighlight>
        );
      }

      renderItemOrders1({item}) {
        return (
            <TouchableHighlight underlayColor="#ccc" onPress={() => {
                this.props.navigation.navigate('PatientOrderDetails')
            }} style={styles.listItem}>           
                    <View key={item.key} style={styles.itemContainer}>
                        <View style={styles.nameContainer}>
                            <Image source={item.status_image} resizeMode='contain'
                                    style={styles.statusImage} />
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                          <Text style={styles.patientText}>{item.patient}</Text>
                          <Text style={styles.doctorText}>{item.doctor}</Text>
                          <Text style={styles.dueDateText}>{item.due_date}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Image source={require('../../../assets/images/show-more.png')} 
                            style={styles.moreImage} />
                        </View>
                    </View>
             </TouchableHighlight>
        );
      }

      renderPrescriptionItem({item}) {
        return (
          <TouchableHighlight underlayColor="#ccc" onPress={() => {
                console.log('Pre pressed!');
            }} style={styles.list_item}>
            {/* <Text key={item.key}> */}
                <View key={item.key} style={styles.itemContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.nameContainer}>
                            <Image source={item.image} resizeMode='contain'
                                    style={styles.statusImage1} />                      
                        </View>
                        <View style={styles.nameContainer1}>
                          <Text style={styles.patientText}>{item.name}</Text>
                          <Text style={styles.doctorText}>{item.dosage}</Text>
                          <Text style={styles.doctorText}>{item.doctor}</Text>
                        </View>
                       
                    </View>
                </View>
            {/* </Text> */}
          </TouchableHighlight>
        );
      }

      renderItemAppointment({item}) {
        return (
          <TouchableHighlight underlayColor="#ccc" onPress={() => {
            console.log('appointment pressed pressed!');}} style={styles.list_item}>
            
                <View key={item.key} style={styles.itemContainer}>             
                        {/* <View style={styles.itemContainer}> */}
                          <IconButton icon="calendar-today" /> 
                          <View style={styles.nameContainer}>
                            <Text style={styles.patientText}>{item.date}</Text>
                            <Text style={styles.patientText}>{item.time}</Text>
                          </View>
                          <Text style={styles.patientText}>{item.doctor}</Text> 
                          <Text style={styles.patientText}>{item.location}</Text> 
                        {/* </View>                   */}
                    
                </View>
          
            
          </TouchableHighlight>
        );
      }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={list_styles.list_item_header}>Medication</Text>
                        <FlatList data={medication_data} renderItem={this.renderPrescriptionItem} />
                        <Text style={list_styles.list_item_header}>Appointments</Text>
                        <FlatList data={appointment_data} renderItem={this.renderItemAppointment} /> 
                        <Text style={list_styles.list_item_header}>Orders</Text>
                        <TouchableHighlight underlayColor="#ccc" onPress={() => { 
           console.log('new pressed!'); this.props.navigation.navigate('PatientOrderDetails')  }} style={styles.list_item}> 
                        <FlatList data={order_data.filter(renderOrder => renderOrder !== null)} 
                            renderItem={this.renderItemOrders}/>  
                        {/* <FlatList data={order_data.filter(renderOrder => renderOrder !== null)} renderItem={this.renderItemOrders1}/>  */}
                        </TouchableHighlight>
                    </View>
                    <View style={pageStyles.footer}>
                        <PatientFooter navigation={this.props.navigation}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
