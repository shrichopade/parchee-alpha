import React from 'react';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { Button, Card, CardItem, Text } from 'native-base';

import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';
import AppTextInput from '../../../components/AppTextInput';

export default class ManageChemists extends React.Component {

    constructor() {
        super();
        this.state = {
          passcode: '',
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    render() {
        return (
            <SafeAreaView  style={pageStyles.container}>
                <View style={pageStyles.screen}>
                    <View style={pageStyles.body}>
                        <Text style={styles.pageTitle}>MANAGE MY CHEMISTS</Text>
                        <View style={styles.cardRowStyle}>
                            <Card style={styles.cardStyle}>
                                <CardItem body bordered style={styles.cardHeader}>
                                    <View style={styles.cardHeaderContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/drprofile.png')
                                            }
                                            style={styles.profileImage}
                                        />
                                        <Text style={styles.level0Text}>Suresh Medicals</Text>
                                    </View>
                                </CardItem>
                                <CardItem body bordered style={styles.cardBody}>
                                    <View style={styles.cardBodyContainer}>
                                        <Text style={styles.level1Text}>Kothrud, Pune</Text>
                                        <Text style={styles.level2Text}>M - 9876545678</Text>
                                        <Text style={styles.level2Text}>E - s.kute@gmail.com</Text>
                                    </View>
                                </CardItem>
                            </Card>
                            <Card style={styles.cardStyle}>
                                <CardItem body bordered style={styles.cardHeader}>
                                    <View style={styles.cardHeaderContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/chemistprofile.png')
                                            }
                                            style={styles.profileImage}
                                        />
                                        <Text style={styles.level0Text}>Mahalaxmi Medicals</Text>
                                    </View>
                                </CardItem>
                                <CardItem body bordered style={styles.cardBody}>
                                    <View style={styles.cardBodyContainer}>
                                        <Text style={styles.level1Text}>Kothrud Depot, Pune</Text>
                                        <Text style={styles.level2Text}>M - 8762345678</Text>
                                        <Text style={styles.level2Text}>E - laxmimedical@gmail.com</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.cardRowStyle}>
                            <Card style={styles.cardStyle}>
                                <CardItem body bordered style={styles.cardHeader}>
                                    <View style={styles.cardHeaderContainer}>
                                        <Image
                                            source={
                                                require('../../../../assets/images/chemistprofile.png')
                                            }
                                            style={styles.profileImage}
                                        />
                                        <Text style={styles.level0Text}>Solkar Pharmacy</Text>
                                    </View>
                                </CardItem>
                                <CardItem body bordered style={styles.cardBody}>
                                    <View style={styles.cardBodyContainer}>
                                        <Text style={styles.level1Text}>Deccan, Pune</Text>
                                        <Text style={styles.level2Text}>M - 9876545678</Text>
                                        <Text style={styles.level2Text}>E - sphrma@yahoo.com</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                        <Button success style={styles.buttonStyle} title="Submit" 
                            onPress={() => this.props.navigation.navigate('PatientConfirmChanges')}>
                            <Text style={styles.buttonText}>Add New Chemist</Text>
                        </Button>
                    </View>
                    <View style={pageStyles.footer}>
                        <PatientFooter navigation={this.props.navigation}/>
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
        marginBottom: 2,
        fontWeight: 'bold',
        backgroundColor: '#93cf96'
    },
    cardRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardStyle: {
        width: '50%',
    },
    cardHeader: {
        marginVertical: 1,
        marginBottom: 1,
        backgroundColor: '#C8E7C9',
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardBody: {
        marginVertical: 1,
        marginBottom: 1,
        backgroundColor: '#E4F3E4',
    },
    cardBodyContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginLeft: 0,
    },
    level0Text: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 0,
        marginBottom: 0,
        flex: 1, 
        flexWrap: 'wrap',
    },
    level1Text: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 0,
        marginRight: 2,
        marginBottom: 5,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    level2Text: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 0,
        marginRight: 2,
        marginBottom: 5,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    buttonStyle: {
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        width: '50%'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
});
