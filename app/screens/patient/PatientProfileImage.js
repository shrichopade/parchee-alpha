import React from 'react';

import {View, Image,StyleSheet, Text} from 'react-native';

const PatientProfileImage = () => {
    return (
      <View style={styles.container}>
      <Image
        source={
          require('../../../assets/images/patientprofile.png')
        }
        style={styles.profileImage}
      />     
      <Text style={styles.nameText}>Neha Khare</Text>             
    </View>
      );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 20,
    alignItems: 'center'
  },
  nameContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 50 / 2,
    marginLeft: 15,
  },
  nameText: {
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: '200',
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