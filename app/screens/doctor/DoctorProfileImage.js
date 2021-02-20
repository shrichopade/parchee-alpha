import React from 'react';

import {View, Image} from 'react-native';

const DoctorProfileImage = () => {
    return (
        <View style={{flexDirection: 'row'}}>
          <Image
            source={
              require('../../../assets/images/drprofile.png')
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

export default DoctorProfileImage;