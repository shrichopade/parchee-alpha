import React from 'react';
import { StyleSheet, View,SafeAreaView } from 'react-native';

import IconButton from './app/components/IconButton';
import Screen from './app/components/Screen';

import RoutinesPage from './app/screens/Routines';
import ExercisesPage from './app/screens/Exercises';
import CreateExercisePage from './app/screens/CreateExercise';

import LogsPage from './app/screens/Logs';
import LogWorkoutPage from './app/screens/LogWorkout';
import ProgressPage from './app/screens/Progress';

//Patient Pages
import ActivePrescriptionPage from './app/screens/ActivePrescription';
import PatientFooter from './app/screens/patient/PatientFooter'

//Common Pages
import SignInPage from './app/screens/common/SignIn'
import DefaultFooter from './app/screens/common/DefaultFooter'

//Aws Amplify Imports
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const pages = {
  routines: {
    title: 'Routines',
    component: <RoutinesPage />,
    has_header_button: false
  },
  exercises: {
    title: 'Exercises',
    component: <ExercisesPage />,
    has_header_button: true
  },
  create_exercise: {
    title: 'Create Exercise',
    component: <CreateExercisePage />,
    has_header_button: false
  },
  logs: {
    title: 'Logs',
    component: <LogsPage />,
    has_header_button: true
  },
  log_workout: {
    title: 'Log Workout',
    component: <LogWorkoutPage />,
    has_header_button: true
  },
  progress: {
    title: 'Progress',
    component: <ProgressPage />,
    has_header_button: true
  },
  active_prescription: {
    title: 'Active Prescription',
    component: <ActivePrescriptionPage />,
    has_header_button: true,
    footer_component: <PatientFooter />
  },
  sign_in: {
    title: 'Sign In',
    component: <SignInPage />,
    has_header_button: false,
    footer_component: <DefaultFooter />
  }
};

var current_page = pages.sign_in;

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView  style={styles.container}>
        <View style={styles.container}>
          <Screen
            page={current_page.component}
            title={current_page.title}
            has_header_button={current_page.has_header_button} 
            footer={current_page.footer_component } />
        </View>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabs_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4CAF50'
    // backgroundColor: '#3e3e3e'
  }
});
