import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Common Pages
import SignIn from './app/screens/common/SignIn'
import RequestOTP from './app/screens/common/RequestOTP'
import ResetPassword from './app/screens/common/ResetPassword'

//Patient Pages
import PatientHome from './app/screens/patient/PatientHome.js';

//Aws Amplify Imports
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4CAF50',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            title: ''
          }}
        >
         
          <Stack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}} />
          <Stack.Screen name="RequestOTP" component={RequestOTP} options={{title: 'Reset Password'}} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{title: 'Reset Password'}} />
          <Stack.Screen name="PatientHome" component={PatientHome} options={{title: 'Patient Home'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
