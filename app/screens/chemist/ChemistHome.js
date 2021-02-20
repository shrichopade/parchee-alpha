import React from 'react';
import { SafeAreaView, View,List,ListItem, FlatList, StyleSheet } from 'react-native';

import pageStyles from '../common/PageStyle.js'
import ChemistFooter from './ChemistFooter'
import list_styles from '../../components/List/styles';
import order_data from './OrderData';
import { item } from '../../lib/general';

export default class ChemistHome extends React.Component {

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
