import React from 'react';
import { Text } from 'native-base';
import {View, Image, StyleSheet } from 'react-native';

const PatientProfileImage = () => {
    return (
        <View style={styles.container}>
          <Image
            source={
              require('../../../assets/images/patientprofile.png')
            }
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.nameText}>Nalini Sathe</Text>
            <View style={styles.nameContainer}>
              <Image source={require('../../../assets/images/mobile.png')} style={styles.mobileImage} />
              <Text style={styles.subText}>9765678012</Text>
            </View>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%'
  },
  nameContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 15,
  },
  nameText: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    marginLeft: 15,
    marginRight: 10,
    marginVertical: 3
  },
  mobileImage: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    marginLeft: 15,
    marginRight: 3
  },
  subText: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 3,
    marginRight: 10
  },
  buttonParallel: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default PatientProfileImage;