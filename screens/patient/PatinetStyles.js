import { StyleSheet } from 'react-native';

const dStyles = StyleSheet.create({

    screen: {
        flex: 10
      },
      body: {
        flex: 6
      },
    headerBgColor: {
        flex: 1,
        backgroundColor: '#4CAF50'
    }, 
    content: {
        
        backgroundColor: '#FFFFFF'
    },
    buttonStyle: {
         
        flexDirection: 'column',
       padding: 0,
       backgroundColor:'#4CAF50',
       marginVertical: 20,
       alignSelf: 'center'
   },
   buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonText: {
        // flex: 1,
        color: '#fff',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '600',
        alignSelf: 'center'
    },
    footerBgColor: {
        flex: 1,
        backgroundColor: '#4CAF50'
    },  
    footerMenu: {
        fontSize: 7,
        fontFamily: 'Arial',
        color: '#ffffff',
        fontWeight: '100',
        marginVertical: 4
    },
    icon_button: {
        padding: 5
      },
    headerFooterIcon: {
        
        height: 27,
        width: 27,
        backgroundColor: '#4CAF50'
    }

})

export { dStyles }