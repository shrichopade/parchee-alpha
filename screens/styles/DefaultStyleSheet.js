import { apisAreAvailable } from 'expo';
import { StyleSheet } from 'react-native';

const dStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },  
    cardStyle: {
        padding:0,
        alignSelf: 'center',
        width:'97%'
    },
    cardItemBodyStyle: {
        padding:0,
        alignSelf: 'center'
    },
    welcomeLeft: {
        color: '#4CAF50',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '900',
        alignSelf: 'auto',
        marginVertical: 8
    },
    welcomeRight: {
        color: '#4CAF50',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '900',
        alignSelf: 'center',
        marginVertical: 8
    },
    pageSubTitle: {
        color: '#4CAF50',
        fontFamily: 'Arial',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '700',
        marginVertical: 16
    },
    formTitle: {
        color: '#4CAF50',
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 1
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    buttonStyle: {
        padding: 0,
        backgroundColor:'#4CAF50',
        marginVertical: 20,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '600',
        alignSelf: 'center'
    },
    footerText: {
        color: '#202020',
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: '400',
        alignSelf: 'center',
        marginVertical: 8
    },
    labelText: {
        color: '#546467',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '300',
        marginVertical: 6
    },
    generalText: {
        color: '#546467',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '400',
        marginVertical: 15
    },
    textLabelNormal: {
        color: '#202020',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: '100'
    },
    linkText: {
        color: '#ff6633',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '400',
        marginVertical: 12
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    welcomeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageTitle:{
        width: 350,
        height: 150,
        alignSelf: 'center',
        marginVertical: 8
    },
    imagePrescription:{
        width: 191,
        height: 263,
        alignSelf: 'center',
        borderWidth:1,
        borderColor: '#4CAF50',
        marginVertical: 8
    }

})

export { dStyles }