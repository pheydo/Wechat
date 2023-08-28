import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CountryCodeDropdown = ({ onSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    onSelect(country); // Pass the selected country to the parent component
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Country Code:</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={handleCountryChange}>
        <Picker.Item label="Select a country" value="" />
        <Picker.Item label="USA (+1)" value="USA" />
        <Picker.Item label="Canada (+1)" value="Canada" />
        {/* Add more countries and their codes here */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CountryCodeDropdown;
