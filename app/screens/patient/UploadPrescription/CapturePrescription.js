import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text,StyleSheet,SafeAreaView } from "react-native";
import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';
import { Icon } from 'native-base';
import list_styles from '../../../components/List/styles';

// import styles from "./styles";

export default class CapturePrescription extends Component {
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

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <SafeAreaView  style={pageStyles.container}>
        <View style={pageStyles.screen}>
          <View style={pageStyles.body}>
            <View style={[styles.container, styles.step1]}>
            <Text style={list_styles.list_item_header}>Take a Picture - {`Step ${currentStep} of ${totalSteps}`}</Text>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Take a Picture: </Text> 
                <Image source={require('../../../../assets/images/mobile-camera.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Upload from Google Drive: </Text> 
                <Image source={require('../../../../assets/images/g-drive.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Upload from i-Cloud: </Text> 
                <Image source={require('../../../../assets/images/icloud.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer}>
                <Text style={styles.labelText}> Upload from Dropbox: </Text> 
                <Image source={require('../../../../assets/images/Dropbox.png')} 
                      style={styles.moreImage} />
              </View>
              <View style={styles.btnContainer1}>
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

// export default CapturePrescription;

const styles = StyleSheet.create({
  
  container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
  },
  btnContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  btnContainer1: {
    flexDirection: 'row',    
    justifyContent: 'center',
    marginTop: 25,
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
  labelText: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 5,
    marginBottom: 2,
  },
  moreImage: {
    width: 40,
    height: 40,
    borderRadius: 25 / 2,
    marginLeft: 15,
    marginRight: 5,
    alignSelf: 'center'
  },
});