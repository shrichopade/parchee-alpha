import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, StyleSheet } from 'react-native';

//Common Pages
import SignIn from './app/screens/common/SignIn';
import RequestOTP from './app/screens/common/RequestOTP';
import ResetPassword from './app/screens/common/ResetPassword';
import SignUp from './app/screens/common/SignUp';
import ConfirmSignUp from './app/screens/common/ConfirmSignUp';

//Patient Pages
import PatientHome from './app/screens/patient/PatientHome';
import UploadPrescription from './app/screens/patient/UploadPrescription';
import PatientOrderDetails from './app/screens/patient/PatientOrderDetails';
import SendtoChemist from './app/screens/patient/SendtoChemist';
import PatientProfileImage from './app/screens/patient/profile/PatientProfileImage';
import PatientManageProfile from './app/screens/patient/profile/ManageProfile';
import PatientManagePersonalInfo from './app/screens/patient/profile/ManagePersonalInfo';
import PatientChangePassword from './app/screens/patient/profile/ChangePassword';
import PatientManageSettings from './app/screens/patient/profile/ManageSettings';
import ManageDoctors from './app/screens/patient/profile/ManageDoctors'
import AddNewDoctor from './app/screens/patient/profile/AddNewDoctor';
import ManageChemists from './app/screens/patient/profile/ManageChemists';
import AddNewChemist from './app/screens/patient/profile/AddNewChemist'
import PatientConfirmChanges from './app/screens/patient/profile/ConfirmChanges';

//Doctor Pages
import DoctorHome from './app/screens/doctor/DoctorHome';
import DoctorProfileImage from './app/screens/doctor/profile/DoctorProfileImage';
import DoctorManageProfile from './app/screens/doctor/profile/ManageProfile';
import DoctorManagePersonalInfo from './app/screens/doctor/profile/ManagePersonalInfo';
import DoctorChangePassword from './app/screens/doctor/profile/ChangePassword';
import DoctorManageSettings from './app/screens/doctor/profile/ManageSettings';
import DoctorConfirmChanges from './app/screens/doctor/profile/ConfirmChanges';
import PatientDetails from './app/screens/doctor/PatientDetails';
import Prescribe from './app/screens/doctor/Prescribe';
import AddMedication from './app/screens/doctor/AddMedication';
import UpdateMedication from './app/screens/doctor/UpdateMedication';

//Chemist Pages
import ChemistHome from './app/screens/chemist/ChemistHome';
import ChemistProfileImage from './app/screens/chemist/profile/ChemistProfileImage';
import OrderDetails from './app/screens/chemist/OrderDetails';
import OldOrders from './app/screens/chemist/OldOrders';
import OldOrderDetails from './app/screens/chemist/OldOrderDetails';
import UpcomingOrders from './app/screens/chemist/UpcomingOrders';
import RepeatOrderDetails from './app/screens/chemist/RepeatOrderDetails';
import ChemistManageProfile from './app/screens/chemist/profile/ManageProfile';
import ChemistManagePersonalInfo from './app/screens/chemist/profile/ManagePersonalInfo';
import ChemistChangePassword from './app/screens/chemist/profile/ChangePassword';
import ChemistManageSettings from './app/screens/chemist/profile/ManageSettings';
import ChemistConfirmChanges from './app/screens/chemist/profile/ConfirmChanges';


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

          <Stack.Screen name="PatientHome" component={PatientHome} options={{headerTitle:()=> <PatientProfileImage/>,
                    headerRight:()=> <Image source={require('./assets/images/notifications.png')} style={styles.profileImage} />}} />
          <Stack.Screen name="UploadPrescription" component={UploadPrescription} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="PatientOrderDetails" component={PatientOrderDetails} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="SendtoChemist" component={SendtoChemist} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="PatientManageProfile" component={PatientManageProfile} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="PatientManagePersonalInfo" component={PatientManagePersonalInfo} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="PatientChangePassword" component={PatientChangePassword} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="PatientManageSettings" component={PatientManageSettings} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="ManageDoctors" component={ManageDoctors} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="AddNewDoctor" component={AddNewDoctor} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="ManageChemists" component={ManageChemists} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="AddNewChemist" component={AddNewChemist} options={{headerTitle:()=> <PatientProfileImage/>}} />
          <Stack.Screen name="PatientConfirmChanges" component={PatientConfirmChanges} options={{headerTitle:()=> <PatientProfileImage/>}} />
          
          
          <Stack.Screen name="DoctorHome" component={DoctorHome} options={{headerTitle:()=> <DoctorProfileImage/>,
                  headerRight:()=> <Image source={require('./assets/images/notifications.png')} style={styles.profileImage} />}} />
          <Stack.Screen name="DoctorManageProfile" component={DoctorManageProfile} options={{headerTitle:()=> <DoctorProfileImage/>}} />
          <Stack.Screen name="DoctorManagePersonalInfo" component={DoctorManagePersonalInfo} options={{headerTitle:()=> <DoctorProfileImage/>}} />
          <Stack.Screen name="DoctorChangePassword" component={DoctorChangePassword} options={{headerTitle:()=> <DoctorProfileImage/>}} />
          <Stack.Screen name="DoctorManageSettings" component={DoctorManageSettings} options={{headerTitle:()=> <DoctorProfileImage/>}} />
          <Stack.Screen name="DoctorConfirmChanges" component={DoctorConfirmChanges} options={{headerTitle:()=> <DoctorProfileImage/>}} />  
          <Stack.Screen name="PatientDetails" component={PatientDetails} options={{headerTitle:()=> <DoctorProfileImage/>}} />  
          <Stack.Screen name="Prescribe" component={Prescribe} options={{headerTitle:()=> <DoctorProfileImage/>}} />  
          <Stack.Screen name="AddMedication" component={AddMedication} options={{headerTitle:()=> <DoctorProfileImage/>}} />  
          <Stack.Screen name="UpdateMedication" component={UpdateMedication} options={{headerTitle:()=> <DoctorProfileImage/>}} />  



          <Stack.Screen name="ChemistHome" component={ChemistHome} options={{headerTitle:()=> <ChemistProfileImage />, 
                  headerRight:()=> <Image source={require('./assets/images/notifications.png')} style={styles.profileImage} />}} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="OldOrders" component={OldOrders} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="OldOrderDetails" component={OldOrderDetails} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="UpcomingOrders" component={UpcomingOrders} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="RepeatOrderDetails" component={RepeatOrderDetails} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistManageProfile" component={ChemistManageProfile} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistManagePersonalInfo" component={ChemistManagePersonalInfo} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistChangePassword" component={ChemistChangePassword} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistManageSettings" component={ChemistManageSettings} options={{headerTitle:()=> <ChemistProfileImage/>}} />
          <Stack.Screen name="ChemistConfirmChanges" component={ChemistConfirmChanges} options={{headerTitle:()=> <ChemistProfileImage/>}} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  } 
}

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
  },
});