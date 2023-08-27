import React, { useState } from 'react'
import {
  View,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking 
} from 'react-native'
import { SvgAppLogo, SvgGoogleLogo } from '../../SRC/Componets/Svg'

const Signup = ({navigation}) => {
  const { width, height } = Dimensions.get('window')
  const containerWidth = width >= 768 ? '100%' : '100%'
  const containerHeight = height >= 1024 ? '50%' : '30%'
  
  const handleLinkPress = () => {
    // Replace 'https://www.example.com' with the desired URL
    Linking.openURL('https://www.example.com');
  };


  return (
    <View
      style={[styles.container, { width:containerWidth }]}
      behavior="padding"
    >
      <View style={styles.svgWelcomePic}>
        <SvgAppLogo />
      </View>

      <View style={styles.SignupTextView}>
        <Text style={styles.SignupText} >
           By clicking Log In, you agree with our <Text style={styles.link} onPress={handleLinkPress}>Terms.</Text> 
       </Text>
     
     
        <Text style={styles.SignupText}>
Learn how we process your data in our <Text style={styles.link} onPress={handleLinkPress}> Privacy.</Text> 
</Text>
      
        <Text style={styles.SignupText} >
Policy and Cookies <Text style={styles.link} onPress={handleLinkPress}> Policy.</Text> 
</Text>
      </View>


<View style={styles.buttonView}>
      <TouchableOpacity style={styles.buttonContainer}>
      <SvgGoogleLogo style={styles.SvgGoogleLogo} /> 
      <Text style={styles.GoogleLoginText}>Login with Google</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
      <SvgGoogleLogo style={styles.SvgGoogleLogo} /> 
      <Text style={styles.GoogleLoginText}>Login with Google</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
      <SvgGoogleLogo style={styles.SvgGoogleLogo} /> 
      <Text style={styles.GoogleLoginText} onPress={() =>navigation.navigate("Loginwithphone")}>Login with phone</Text> 
      </TouchableOpacity>
      </View>

      <View>    
        <Text style={styles.SignupText} >Don’t have account? <Text>Signup</Text> </Text>
      </View>
    </View>
    
  )
}
export default Signup

const styles = StyleSheet.create({
  svgWelcomePic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 150,
  },

  

  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#AA3FEC',
  },

  buttonContainer: {
    flexDirection:'row',
    height: 70,
    
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    
  },
  buttonView:{ marginVertical:20, width:"95%"},

  GoogleLoginText:{
    alignSelf:"center",
    fontSize:20,
    marginHorizontal:40
    
  },
  SvgGoogleLogo:{alignSelf:"center",
  marginHorizontal:10
},
link:{textDecorationLine: 'underline',},
SignupTextView:{marginVertical:20,justifyContent:"center"},
SignupText:{alignSelf:"center", color:"white"}

})
