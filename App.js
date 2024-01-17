import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';

export default function App() {
  const [buttonColor, setButtonColor] = useState('#ffe61d');

  const showAlert = () => {
    Alert.alert('Mensaje', 'Jose Soto SM-54');
  };

  const changeButtonColor = () => {
    const newColor = buttonColor === '#ffe61d' ? 'red' : '#ffe61d';
    setButtonColor(newColor);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={() => {
          showAlert();
          changeButtonColor();
        }}
      >
        <Text style={styles.buttonText}>Hola Mundo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffe61d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
