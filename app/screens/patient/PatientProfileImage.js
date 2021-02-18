import React from 'react';

import {View, Image} from 'react-native';

const PatientProfileImage = () => {
    return (
        <View style={{flexDirection: 'row'}}>
          <Image
            source={
              require('../../../assets/images/patientprofile.png')
            }
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              marginLeft: 15,
            }}
          />
        </View>
      );
};

export default PatientProfileImage;