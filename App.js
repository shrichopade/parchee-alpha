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
import UploadPrescription from './app/screens/patient/UploadPrescription';
import PatientOrderDetails from './app/screens/patient/PatientOrderDetails';

//Doctor Pages
import DoctorHome from './app/screens/doctor/DoctorHome';
import DoctorProfileImage from './app/screens/doctor/DoctorProfileImage';

//Chemist Pages
import ChemistHome from './app/screens/chemist/ChemistHome';
import ChemistProfileImage from './app/screens/chemist/ChemistProfileImage';
import OrderDetails from './app/screens/chemist/OrderDetails';
import OldOrders from './app/screens/chemist/OldOrders';
import OldOrderDetails from './app/screens/chemist/OldOrderDetails';
import UpcomingOrders from './app/screens/chemist/UpcomingOrders';
import RepeatOrderDetails from './app/screens/chemist/RepeatOrderDetails';
import ChemistManageProfile from './app/screens/chemist/profile/ManageProfile';
import ChemistManagePersonalInfo from './app/screens/chemist/profile/ManagePersonalInfo';
import ChemistChangePassword from './app/screens/chemist/profile/ChangePassword';
import ChemistManageSettings from './app/screens/chemist/profile/ManageSettings';


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
            headerStatusBarHeight: 50,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            title: ''
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn}  options={{headerStatusBarHeight: 0}}/>
          <Stack.Screen name="RequestOTP" component={RequestOTP} options={{title: 'Reset Password'}} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{title: 'Reset Password'}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{title: 'Register/ Sign Up'}} />
          <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} options={{title: 'Confirm Sign Up'}} />

          <Stack.Screen name="PatientHome" component={PatientHome} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="UploadPrescription" component={UploadPrescription} options={{title: 'Upload Prescription', headerRight:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="PatientOrderDetails" component={PatientOrderDetails} options={{title: 'Patient Order Details', headerRight:()=> <PatientProfileImage/>}} />
          
          
          <Stack.Screen name="DoctorHome" component={DoctorHome} options={{headerStatusBarHeight: 50, headerTitle:()=> <DoctorProfileImage/>}} />

          <Stack.Screen name="ChemistHome" component={ChemistHome} options={{headerTitle:()=> <ChemistProfileImage />}} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="OldOrders" component={OldOrders} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="OldOrderDetails" component={OldOrderDetails} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="UpcomingOrders" component={UpcomingOrders} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="RepeatOrderDetails" component={RepeatOrderDetails} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistManageProfile" component={ChemistManageProfile} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistManagePersonalInfo" component={ChemistManagePersonalInfo} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistChangePassword" component={ChemistChangePassword} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistManageSettings" component={ChemistManageSettings} options={{headerTitle:()=> <ChemistProfileImage/>}} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  } 
}
 