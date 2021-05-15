import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class WelcomeScreen extends Component{
constructor()
{
    super()
    this.state={
        emaildId: '',
        password: ''
    }
}


userLogin=(emailId,password)=>
{
    firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>
    {
        return Alert.alert("Succesfully Login")
    })
.catch(error)
{
    var errorCode=error.code;
    var errorMessage= error.message;
    return Alert.alert(errorMessage)
}

}

userSignUp=(emailId,password)=>
{
    firebase.auth().createUserWithEmailAndPassword(emailId,password).then((response)=>
    {
        return Alert.alert("user added succesfully");
    })
    .catch(function(error)
    {
        //Handle Errors here
        var errorCode=error.code;
    var errorMessage= error.message;
    return Alert.alert(errorMessage) 
    });
}

render()
{
    return(
        <View style= {styles.container}>
            <View style={styles.profileContainer}>
          <SantaAnimation/>
                <Text style={styles.title}>Barter App</Text>
                </View>
                <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@BarterApp.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />


        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
      <TouchableOpacity
      style={[styles.button,{marginBotton:20,marginTop:20}]}
      onPress={()=>{
          this.userLogin(this.state.emailId,this.state.password)
      }}>
<TouchableOpacity
      style={styles.button}
      onPress={()=>{
          this.userSignUp(this.state.emailId,this.state.password)
      }}>
<Text style={styles.buttonText}>Sign Up</Text>

      </TouchableOpacity>
      </TouchableOpacity>
        </View>
      </View> 
)}}

