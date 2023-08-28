import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { SvgArrowback } from '../../SRC/Componets/Svg'

const Loginwithphone = ({ placeholder, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <View>
        <SvgArrowback onPress={() => navigation.goBack()}/>
      </View>

      <View style={styles.MynumberTextView}>
        <Text style={styles.MynumberText} onPress={() => navigation.navigate("Countrypicker")}>My number is</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
        }}
      >
        <TextInput
          style={styles.inputcountrycode}
          placeholder={placeholder}
          placeholderTextColor="red"
        />

        <TextInput
          style={styles.inputnumber}
          placeholder={placeholder}
          placeholderTextColor="red"
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.LoginwithphoneText} >
          By clicking Log In, you agree with our Terms. Learn how process your
          data in our Privacy Policy and Cookies Policy. By clicking Log In, you
          agree with our Terms. Learn how process your data in our Privacy
          Policy and Cookies
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
      
      <Text style={styles.GoogleLoginText}>Login with Google</Text> 
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Loginwithphone

const styles = StyleSheet.create({
  MynumberText: {
    fontSize: 35,
    marginLeft: 40,
  },
  MynumberTextView: { marginTop: 40 },

  inputnumber: {
    borderWidth: 0, // This removes the border of the TextInput itself
    height: 30,
    color: 'black',
    borderBottomWidth: 1,
    width: 220,
    marginLeft: 10,
  },
  inputcountrycode: {
    borderWidth: 0, // This removes the border of the TextInput itself
    height: 30,
    color: 'black',
    borderBottomWidth: 1,
    width: 50,
    marginLeft: 10,
  },

  LoginwithphoneText:{
    alignSelf:"center"
  },
  buttonContainer: {
    height: 70,
    borderWidth: 1,
    marginTop: 80,
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
})
