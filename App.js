import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import testimg from "./assets/icon.png"

export default function App() {
    const [text, setText, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/330px-Ethereum-icon-purple.svg.png"}} style={{width: 150, height: 150}}/>
      <Text>Enter a dollar amount to be converted to Ethereum</Text>
      {/* <TextInput style={styles.input} onChangeText={onChangeText} value={text} /> */}
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={number}
        placeholder="USD"
        keyboardType="numeric"
      />
      
        
      
      <Text>
        {text / 4500} Ethereum
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ea0ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
