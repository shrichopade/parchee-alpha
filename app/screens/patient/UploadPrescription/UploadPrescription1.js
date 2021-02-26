import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text,StyleSheet,SafeAreaView } from "react-native";
import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';
import { Icon } from 'native-base';
import list_styles from '../../../components/List/styles';

// import styles from "./styles";

export default class UploadPrescription1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: ""
    };
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep()
    };
  };

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack= ()=> {
    const { back } = this.props;
    // Go to previous step
    back();
  };

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <SafeAreaView  style={pageStyles.container}>
      <View style={pageStyles.screen}>
        <View style={pageStyles.body}>
          <View style={[styles.container, styles.step1]}>
              <Text style={list_styles.list_item_header}>Upload Prescription - {`Step ${currentStep} of ${totalSteps}`}</Text>
                <Image
                    source={require("../../../../assets/images/prescription1.png")}
                    style={styles.btnImage1}
                    resizeMode="cover"
                  />
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={this.goBack} style={styles.btnStyle}>
                          <Image
                            source={require("../../../../assets/images/leftarrow.png")}
                            style={styles.btnImage}
                            resizeMode="cover"
                          />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.nextStep} style={styles.btnStyle}>
                          <Image
                            source={require("../../../../assets/images/rightarrow.png")}
                            style={styles.btnImage}
                            resizeMode="cover"
                          />
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
    );
  }
}

// export default UploadPrescription1;

const styles = StyleSheet.create({
  
  container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
  },
  btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
  },
  icon:{
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
    marginRight: 5,
    alignSelf: 'center'
  },
  input: {
      fontFamily: 'Arial',
      fontSize: 10,
      fontWeight: '400',
      marginLeft: 5,
      marginRight: 5,
      alignSelf: 'center'
  },
  currentStepText: {
      fontFamily: 'Arial',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 15,
      marginRight: 5,
      marginVertical: 3,
      marginBottom: 5,
      alignSelf: 'center'
  },
   btnImage: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      marginLeft: 15,
      marginRight: 5,
      alignSelf: 'center'
  },
  btnImage1: {
    width: 300,
    height: 440,
    borderRadius: 40 / 2,
    marginLeft: 15,
    marginRight: 5,
    borderColor: '#a1a1a1',
    alignSelf: 'center'
}
});