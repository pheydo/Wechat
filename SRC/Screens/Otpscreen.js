import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgArrowback } from '../../SRC/Componets/Svg'

const Otpscreen = ({navigation}) => {

    const inputRefs = [];
  
  const handleRef = (ref, index) => {
    inputRefs[index] = ref;
  };

  const handleInputChange = (value, index) => {
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].focus();
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
       <View>
        <SvgArrowback onPress={() => navigation.goBack()}/>
      </View>

      <View style={styles.MynumberTextView}>
        <Text style={styles.MynumberText} onPress={() => navigation.navigate("Countrypicker")}>Enter OTP</Text>
      </View>

      <View style={styles.row}>
      {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            style={styles.input}
           
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => handleRef(ref, index)}
            onChangeText={(text) => handleInputChange(text, index)}
            onSubmitEditing={() => {
              if (index < inputRefs.length - 1) {
                inputRefs[index + 1].focus();
              }
            }}
          />
        ))}
      </View>

<View style={styles.ResendView}><Text style={styles.ResendText}>Resend</Text></View>
      
      <TouchableOpacity style={styles.buttonContainer}>
      
      <Text style={styles.GoogleLoginText} >countinue</Text> 
      </TouchableOpacity>


    </SafeAreaView>
  )
}

export default Otpscreen

const styles = StyleSheet.create({

    MynumberText: {
        fontSize: 35,
        marginLeft: 40,
      },
      MynumberTextView: { marginTop: 40 },

      buttonContainer: {
        height: 70,
        borderWidth: 1,
        marginTop: 40,
        paddingHorizontal: 10,
        borderRadius: 30,
        backgroundColor: '#AA3FEC',
        justifyContent:"center"
        
      },
      GoogleLoginText:{
        alignSelf:"center",
        fontSize:20,
        color:"white"
      },
      row: {
        flexDirection: 'row',
        marginTop:100
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
      },

      ResendView:{marginTop:30},

      ResendText:{alignSelf:"center", fontSize:20,color:"#8E8E8E"}
})