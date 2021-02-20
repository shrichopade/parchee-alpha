import React from 'react';
import { Text, View,TouchableHighlight, Image, Picker } from 'react-native';
import styles from './styles';

function renderItem({item}) {
    return (
      <TouchableHighlight underlayColor="#ccc" onPress={() => {
        console.log('pressed!');
      }} style={styles.list_item}>
        <Text key={item.key}>{item.name}</Text>
      </TouchableHighlight>
    );
}
function renderPrescription({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
      console.log('pressed!');
    }} style={styles.list_item}>
      <Text key={item.key}>{item.name}</Text>
    </TouchableHighlight>
  );
}

function renderPickerItems(data) {
  return data.map((item) => {
    let val = item.name.toLowerCase();
    return (
      <Picker.Item key={item.key} label={item.name} value={val} />
    );
  });
}

function renderItemAppointment({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
      console.log('pressed!');
    }} style={styles.list_item}>
      <Text key={item.key}>{item.doctor} {item.date}</Text>
    </TouchableHighlight>
  );
}

{/*function renderItemOrders({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
      console.log('pressed!');
    }} style={styles.list_item}>
      <Text key={item.key}>{item.date} {item.chemist}</Text>
    </TouchableHighlight>
  );
} */}
function renderItemOrders({item}) {
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
              <Image source={require('../../assets/images/show-more.png')} 
                  style={styles.moreImage} />
          </View>
      </Text>
    </TouchableHighlight>
  );
}

export { renderItem, renderPickerItems,renderItemAppointment,renderItemOrders,renderPrescription };