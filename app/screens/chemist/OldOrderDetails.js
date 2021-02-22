import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image,
    TouchableHighlight, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { Checkbox  } from 'react-native-paper';

import pageStyles from '../common/PageStyle.js'
import ChemistFooter from './ChemistFooter'
import order_metadata from './data/OrderMetaData';
import order_details_data from './data/OrderDetailsData';

export default class OrderDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            checked: 'checked'
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    renderOrderMetadata = ({item}) => {
        return (
            <TouchableHighlight underlayColor="#ccc" style={styles.metadataItems}>
                <View key={item.key} style={styles.rootContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.labelTextLevel1}>{item.patient}</Text>
                            <Text style={styles.labelTextLevel2}>{item.patient_mobile}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.labelTextLevel1}>{item.doctor}</Text>
                            <Text style={styles.labelTextLevel2}>{item.doctor_mobile}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.labelTextLevel1}>D: {item.due_date}</Text>
                            <Text style={styles.labelTextLevel2}>O: {item.order_date}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.labelTextLevel1}>Address: {item.delivery_address}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    renderOrderDetails = ({item}) => {
        return(
            <TouchableHighlight underlayColor="#ccc" style={styles.orderDetailsItems}>
                <View key={item.key} style={styles.rootContainerDetails}>
                    <View style={styles.itemContainer}>
                        <View style={styles.nameContainer}>
                            <Image source={item.item_image} resizeMode='contain'
                                    style={styles.statusImage} />
                            <Text style={styles.statusText}>{item.item_type}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.labelTextLevel1}>{item.item_name}</Text>
                            <Text style={styles.labelTextLevel2}>{item.item_strength}</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.quantityContainer}>
                                <Text style={styles.labelTextLevel0}>{item.item_quantity}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                                <Checkbox
                                    status={this.state.checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.inputValueUpdate(!this.state.checked);
                                    }}
                                />
                                <Text style={styles.statusText}>Dispensed</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <View  style={pageStyles.rootContainer}>
                            <Text style={styles.listItemHeader}>ORDER DETAILS</Text>
                            <FlatList data={order_metadata.filter(renderOrderMetadata => renderOrderMetadata !== null)} 
                                renderItem={this.renderOrderMetadata}/>   
                            <FlatList data={order_details_data.filter(renderOrderDetails => renderOrderDetails !== null)} 
                                renderItem={this.renderOrderDetails}/>     
                        </View>
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
    rootContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rootContainerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemContainer: {
        flexDirection: 'row',
    },
    nameContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginRight: 30,
    },
    listItemHeader: {
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        backgroundColor: '#a1a1a1'
    },
    metadataItems: {
      padding: 10,
      backgroundColor: '#d2d2d2',
      borderBottomWidth: 5,
      borderBottomColor: '#f3f3f3'
    },
    orderDetailsItems: {
        padding: 5,
        backgroundColor: '#e1e1e1',
        borderBottomWidth: 5,
        borderBottomColor: '#f3f3f3'
    },
    labelTextLevel1: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 15,
        marginRight: 5,
        marginVertical: 3,
        marginBottom: 3
    },
    labelTextLevel0: {
        fontFamily: 'Arial',
        fontSize: 22,
        fontWeight: '800',
        marginLeft: 15,
        marginRight: 5,
        marginVertical: 10,
        marginBottom: 10,
        color: "#FF3333",
    },
    labelTextLevel2: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 15,
        marginRight: 10,
        marginVertical: 3,
        marginBottom: 3
    },
    statusImage: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    statusText: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-evenly'
    },
    buttonStyle: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '20%'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
});