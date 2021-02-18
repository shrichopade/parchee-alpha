import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Common Pages
import SignIn from './app/screens/common/SignIn'
import RequestOTP from './app/screens/common/RequestOTP'

//Patient Pages
import ActivePrescription from './app/screens/ActivePrescription';

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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
