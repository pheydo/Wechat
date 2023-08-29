// import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgArrowback } from '../../SRC/Componets/Svg';

const windowWidth = Dimensions.get('window').width;

const Loginwithphone = ({ placeholder, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 0.05 * windowWidth }}>
      <View>
        <SvgArrowback onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.MynumberTextView}>
        <Text style={styles.MynumberText} onPress={() => navigation.navigate('Countrypicker')}>
          My number is
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputcountrycode}
          placeholder={placeholder}
          placeholderTextColor="red"
        />

        <TextInput
          style={styles.inputnumber}
          placeholder={placeholder}
          placeholderTextColor="red"
          keyboardType="numeric"
        />
      </View>

      <View style={{ marginTop: 0.1 * windowWidth }}>
        <Text style={styles.LoginwithphoneText}>
          By clicking Log In, you agree with our Terms. Learn how process your data in our Privacy
          Policy and Cookies Policy. By clicking Log In, you agree with our Terms. Learn how
          process your data in our Privacy Policy and Cookies
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Otpscreen')}>
        <Text style={styles.GoogleLoginText}>continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MynumberText: {
    fontSize: 0.07 * windowWidth,
    marginLeft: 0.1 * windowWidth,
  },
  MynumberTextView: { marginTop: 0.2 * windowWidth },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0.14 * windowWidth,
  },
  inputnumber: {
    borderWidth: 0,
    height: 0.04 * windowWidth,
    color: 'black',
    borderBottomWidth: 1,
    width: 0.5 * windowWidth,
    marginLeft: 0.02 * windowWidth,
  },
  inputcountrycode: {
    borderWidth: 0,
    height: 0.04 * windowWidth,
    color: 'black',
    borderBottomWidth: 1,
    width: 0.15 * windowWidth,
    marginLeft: 0.02 * windowWidth,
  },

  LoginwithphoneText: {
    alignSelf: 'center',
    lineHeight: 0.05 * windowWidth,
  },
  buttonContainer: {
    height: 0.12 * windowWidth,
    borderWidth: 1,
    marginTop: 0.1 * windowWidth,
    paddingHorizontal: 0.04 * windowWidth,
    borderRadius: 0.15 * windowWidth,
    backgroundColor: '#AA3FEC',
    justifyContent: 'center',
  },
  GoogleLoginText: {
    alignSelf: 'center',
    fontSize: 0.04 * windowWidth,
    color: 'white',
  },
});

export default Loginwithphone;
