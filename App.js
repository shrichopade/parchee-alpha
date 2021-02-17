import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './app/components/Screen';
import RenderScreen from './app/components/RenderScreen';

//Common Pages
import SignInPage from './app/screens/common/SignIn'
import RequestOTP from './app/screens/common/RequestOTP'
import DefaultFooter from './app/screens/common/DefaultFooter'

//Patient Pages
import ActivePrescriptionPage from './app/screens/ActivePrescription';
import PatientFooter from './app/screens/patient/PatientFooter'

//Aws Amplify Imports
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const Stack = createStackNavigator();

const pages = {
  sign_in: {
    title: 'Sign In',
    component: <SignInPage />,
    has_header_button: false,
    footer_component: <DefaultFooter />
  },
  request_otp: {
    title: 'Reset Password',
    component: <RequestOTP />,
    has_header_button: false,
    footer_component: <DefaultFooter />
  },
  active_prescription: {
    title: 'Active Prescription',
    component: <ActivePrescriptionPage />,
    has_header_button: true,
    footer_component: <PatientFooter />
  }
};

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" headerMode="none">
          <Stack.Screen name="SignIn" component={RenderScreen} initialParams={{'current_page': pages.sign_in}}/>
          <Stack.Screen name="RequestOTP" component={RenderScreen} initialParams={{'current_page': pages.request_otp}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
