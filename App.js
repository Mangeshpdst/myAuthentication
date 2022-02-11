
import { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      number: '', 
      otp: ''
    }
  }
  sendOTP = () => {
    this.setState({
      otp: this.state.number
    })
  }
  render(){
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} 
      placeholder="Enter Number"
      maxLength={10}
      
      onChangeText={number => this.setState({number}) } 
    
      value={this.state.number}
      keyboardType="numeric"/>



      <Button title='Get Otp' style={styles.btn} 
      onPress={this.sendOTP}
      />
      <Text value={this.state.otp}>{this.state.otp}</Text>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: "80%",
    backgroundColor: "#e6e9ed",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    textAlign: "center",
    fontSize: 20
  },
  
});
