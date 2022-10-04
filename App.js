import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, ScrollView, Pressable, Alert, Text, TextInput, View, Switch, SafeAreaView } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {lightTheme, darkTheme } from './style/style';

export default function App() {

  const [isDark, setLight] = useState(false)
  const theme = isDark ? darkTheme : lightTheme
  const toggle = () => setLight(prev => !prev)

    //Calculation const
    const [weight, setWeight] = useState('');
    const [bottles, setBottles] = useState(0);
    const [hours, setHours] = useState(0);
    const [gender, setGender] = useState('male');
    const [bloodAlcohol, setBloodAlcohol] = useState(0);
  
    //Alert
    const [ok, setOk] = useState(false);

    //Radio buttons for genders
  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const showAlert = () => {
    Alert.alert(
      "!!",
      "Enter a value",
      [
        {
          text: "Ok",
          onPress: () => setOk(true)
        },
        {
          text: "Cancel",
          onPress: () => setOk(false)
        }
      ]
    );
  }

  function calculate() {
    let burning = weight / 10;
    let gramsLeft = grams - burning * hours;
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    

    if (weight === '') {
      showAlert();
    } else {
      if (gender === 'male') {
        result = gramsLeft / (weight * 0.7)
      } else {
        result = gramsLeft / (weight * 0.6)
      }
    }  
      if (result > 0) {
        setBloodAlcohol(result);
      } else {
        setBloodAlcohol(0);
      }
    }

  


  return (
    <View style= {theme.container}>
      <SafeAreaView style={theme.main}>
      {/* teemanvaihto */}
      <View style={theme.field}>
        <Text style={theme.switch}>Theme</Text>
        <Switch
          style={theme.switch}
          trackColor={{ true: 'red', false: 'pink' }}
          value={isDark}
          onValueChange={toggle}
        />
      </View>
    
      <Text style = {theme.header}>Alcometer</Text>
      <Text style={theme.titleWeight}>Weight</Text>
      <TextInput
       style= {theme.textInput}
      
        keyboardType='number-pad'
        onChangeText={text => setWeight(text)}
     />

     
      <Text>Bottles</Text>
      <NumericInput onChange={v => setBottles(v)}
      bottles={bottles}
      totalWidth={200}
            totalHeight={40}
            step={1}
            rounded
            rightButtonBackgroundColor={'green'}
            leftButtonBackgroundColor={'green'}
            borderColor={'green'}
            textColor={'red'}
            iconStyle={{color: '#FFFAFA'}}
      
      
      />

    <Text>Hours</Text>
    <NumericInput onChange={v => setHours(v)}
    hours={hours}
    totalWidth={200}
    totalHeight={40}
    step={1}
    rounded
    rightButtonBackgroundColor={'green'}
    leftButtonBackgroundColor={'green'}
    borderColor={'green'}
    textColor={'red'}
    iconStyle={{color: '#FFFAFA'}}

    
    />
    <Text>Genders</Text>
    <RadioForm
    style={theme.radio}
    labelStyle={{color: 'purple'}}
                radio_props={genders} 
              
                onPress={(value) => {
                  
                  setGender(value)
                }}
            />

     
<Pressable style={theme.button} onPress={calculate}>
<Text style={theme.text}>CALCULATE</Text>
          </Pressable>
     <Text style= {theme.result}> Your alcolevel is {bloodAlcohol.toFixed(2)}</Text>
     </SafeAreaView>
     </View>

  );
}



