import React, { Component } from "react";
import { Image, View, TouchableOpacity, FlatList, Text,StyleSheet,SafeAreaView,Body, ListItem } from "react-native";
import pageStyles from '../../common/PageStyle.js';
import medication_data from '../../../data/capturedprescription';
import list_styles from '../../../components/List/styles';
import { renderCapturedPrescriptionItem } from '../../../lib/general';


// import styles from "./styles";

export default class SelectMedication extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView  style={pageStyles.container}>
      <View style={pageStyles.screen}>
        <View style={pageStyles.body}>
          <View style={[styles.container, styles.step1]}>
            <Text style={list_styles.list_item_header}>Your Prescription Items - Step 1 of 3</Text>
            <FlatList data={medication_data} renderItem={renderCapturedPrescriptionItem} />
            <View style={styles.btnContainer}>
              
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SendtoChemistStep2')} 
                style={styles.btnStyle}>
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
      justifyContent: 'center',
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
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
    alignSelf: 'center'
}
});