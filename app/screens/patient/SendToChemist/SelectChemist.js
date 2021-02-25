import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text,StyleSheet,SafeAreaView } from "react-native";
import pageStyles from '../../common/PageStyle.js';
import PatientFooter from '../PatientFooter';
import { Icon, Item,Picker } from 'native-base';

// import styles from "./styles";

export default class SelectChemist extends Component {
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
              <Text style={styles.currentStepText}>
                  {`Step ${currentStep} of ${totalSteps}`}
              </Text>
              <Text style={styles.currentStepText}> 'Chemist' </Text> 
              <Item picker>
                                <Picker style={styles.dropdownStyle}
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select Chemist"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    // onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Mahalaxmi Medical" value="Mahalaxmi Medical" />
                                    <Picker.Item label="Surendra Medical" value="Surendra Medical" />
                                    <Picker.Item label="Surendra Medical" value="Surendra Medical" />
                                </Picker>
                            </Item>              
              <View style={styles.btnContainer1}>
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

// export default CapturePrescription;

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
  btnContainer1: {
    flexDirection: 'row',    
    alignItems: 'center'
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
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 15,
    marginRight: 10,
    marginVertical: 10,
    marginBottom: 10
},
dropdownStyle: {
    height: 30, 
    width: '98%',
    alignSelf: 'center',
    marginVertical: 0,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 10,
}
});