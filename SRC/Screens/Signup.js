// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Input, Button, Text, Picker } from 'react-native-elements';

// export default function Signup() {

//   const [fullName, setFullName] = useState('');
//   const [gender, setGender] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   // const handleSignup = () => {
//   //   // Add your signup logic here
//   //   // You can use the state variables (fullName, gender, dateOfBirth, phoneNumber) to send data to your backend or perform any other actions.
//   // };
  
//   return (
//     <View style={styles.container}>
//       <Text h3>Signup</Text>
//       <Input
//         label="Full Name"
//         placeholder="Enter your full name"
//         value={fullName}
//         onChangeText={setFullName}
//       />
//       <Input
//         label="Date of Birth"
//         placeholder="YYYY-MM-DD"
//         value={dateOfBirth}
//         onChangeText={setDateOfBirth}
//       />
//       <Input
//         label="Phone Number"
//         placeholder="Enter your phone number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <Picker
//         label="Gender"
//         selectedValue={gender}
//         onValueChange={(itemValue) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>
//       <Button title="Signup" onPress={handleSignup} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
// container:{justifyContent:"center", flex:1, marginHorizontal:20,}

// })
