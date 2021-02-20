import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Common Pages
import SignIn from './app/screens/common/SignIn';
import RequestOTP from './app/screens/common/RequestOTP';
import ResetPassword from './app/screens/common/ResetPassword';
import SignUp from './app/screens/common/SignUp';
import ConfirmSignUp from './app/screens/common/ConfirmSignUp';

//Patient Pages
import PatientHome from './app/screens/patient/PatientHome';
import PatientProfileImage from './app/screens/patient/PatientProfileImage';

//Doctor Pages
import DoctorHome from './app/screens/doctor/DoctorHome';
import DoctorProfileImage from './app/screens/doctor/DoctorProfileImage';

//Chemist Pages
import ChemistHome from './app/screens/chemist/ChemistHome';
import ChemistProfileImage from './app/screens/chemist/ChemistProfileImage';
import OrderDetails from './app/screens/chemist/OrderDetails';
import OldOrders from './app/screens/chemist/OldOrders';

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
          <Stack.Screen name="SignIn" component={SignIn}  options={{headerStatusBarHeight: 0}}/>
          <Stack.Screen name="RequestOTP" component={RequestOTP} options={{title: 'Reset Password'}} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{title: 'Reset Password'}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{title: 'Register/ Sign Up'}} />
          <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} options={{title: 'Confirm Sign Up'}} />

          <Stack.Screen name="PatientHome" component={PatientHome} options={{title: 'Patient Home', headerRight:()=> <PatientProfileImage/>}} />
          
          <Stack.Screen name="DoctorHome" component={DoctorHome} options={{title: 'Doctor Home', headerRight:()=> <DoctorProfileImage/>}} />

          <Stack.Screen name="ChemistHome" component={ChemistHome} options={{headerStatusBarHeight: 50, headerRight:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerStatusBarHeight: 50, headerRight:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="OldOrders" component={OldOrders} options={{headerStatusBarHeight: 50, headerRight:()=> <ChemistProfileImage/>}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } 
}
 