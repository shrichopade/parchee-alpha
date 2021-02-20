import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image,
    TouchableHighlight, StyleSheet } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import ChemistFooter from './ChemistFooter'
import list_styles from '../../components/List/styles';
import order_data from './OrderData';
import { renderItem } from '../../lib/general';


export default class ChemistHome extends React.Component {

    constructor() {
        super();
    }

    renderOrder = ({item}) => {
        return (
          <TouchableHighlight underlayColor="#ccc" onPress={() => {
                console.log('pressed!');
            }} style={styles.listItem}
          >
            <Text key={item.key}>
                <View style={styles.itemContainer}>
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
                    <Image source={require('../../../assets/images/show-more.png')} 
                        style={styles.moreImage} />
                </View>
            </Text>
          </TouchableHighlight>
        );
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.listItemHeader}>Your Orders...</Text>
                        <FlatList data={order_data.filter(renderOrder => renderOrder !== null)} 
                            renderItem={this.renderOrder}/>                  
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
    nameContainer: {
        flexDirection: 'column'
    },
    itemContainer: {
        flexDirection: 'row',
    },
    listItemHeader: {
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        backgroundColor: '#93cf96'
    },
    listItem: {
      padding: 10,
      backgroundColor: '#C8E7C9',
      borderBottomWidth: 5,
      borderBottomColor: '#f3f3f3'
    },
    patientText: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 15,
        marginRight: 5,
        marginVertical: 3,
        marginBottom: 5,
    },
    statusImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    statusText: {
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: '400',
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    moreImage: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginLeft: 15,
        marginRight: 5,
        alignSelf: 'center'
    },
    doctorText: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 15,
        marginRight: 5,
        marginBottom: 5,
    },
    dueDateText: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 15,
        marginRight: 5
    },
});