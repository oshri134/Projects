import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';



export default function App() {

  const [myNumber1 , setMyNumber1 ]=useState(0);
  const [myNumber2, setMyNumber2 ]=useState(0);

  return (
    <View style={styles.container}>
   
      <Text style={styles.underline}>Welcome to my calculator</Text>
      <Text>{"     "}</Text>
      <Text>Pleace enter number one</Text>
      <TextInput
      style={styles.input}
      onChangeText={(num1)=>setMyNumber1(Number(num1))}
      placeholder="Numer"
      keyboardType="phone-pad" >
      </TextInput>
      
     <Text>Pleace enter number two</Text>
      <TextInput
      style={styles.input}
      onChangeText={(num2)=>setMyNumber2(Number(num2))}
      placeholder="Numer"
      keyboardType="phone-pad"
      
      ></TextInput>
      <Text>{"     "}</Text>
      <Text>{"     "}</Text>

      <Text>Your number one is :{myNumber1}</Text>
      <Text>{"     "}</Text>
      <Text>{"     "}</Text>
      <Text>Your number two is :{myNumber2}</Text>
      <Text>{"     "}</Text>

      <Text>{myNumber1}+{myNumber2}={myNumber1 + myNumber2}</Text>

      <Text>{myNumber1}*{myNumber2}={myNumber1 * myNumber2}</Text>

      <Text>{myNumber1}-{myNumber2}={myNumber1 - myNumber2}</Text>

      <Text>{myNumber1}/{myNumber2}={myNumber1 / myNumber2}</Text>

      <StatusBar style="auto" />

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
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  underline: 
  {textDecorationLine: 'underline'}


});
