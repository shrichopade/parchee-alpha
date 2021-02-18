import React from 'react';
import { View, Text, FlatList } from 'react-native';

import list_styles from '../components/List/styles';

import medication_data from '../data/activeprescription';

import { renderItem } from '../lib/general';

export default class ActivePrescription extends React.Component {

  render() {
    return (
      <View>
        <Text style={list_styles.list_item_header}>Morning</Text>
        <FlatList data={medication_data} renderItem={renderItem} />
        <Text style={list_styles.list_item_header}>Afternoon</Text>
        <FlatList data={medication_data} renderItem={renderItem} />
        <Text style={list_styles.list_item_header}>Night</Text>
        <FlatList data={medication_data} renderItem={renderItem} />
      </View>
    );
  }

}