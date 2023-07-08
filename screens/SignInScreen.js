import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableOpacity, Image, Text, Linking, KeyboardAvoidingView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  СrossOutEyeIcon  from '../assets/Icons/СrossOutEyeIcon'
import  EyeIcon  from '../assets/Icons/EyeIcon'
import  GoogleIcon  from '../assets/Icons/GoogleIcon'
import  IosIcon  from '../assets/Icons/IosIcon'
import FacebookIcon from '../assets/Icons/FacebookIcon'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


function SignInScreen({navigation}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisibleToggle, setIsPasswordVisibleToggle] = useState(false);
  useEffect(() =>{
    if(login === ''){
      setIsInvalidLogin(false)
    }
    if (password === ''){
      setIsInvalidPassword(false)
    }
  }, [login, password])


  const urlGoogle = 'https://www.google.com/';
  const urlFacebook = 'https://www.facebook.com/starta.one.fb';
  const urlIos = 'https://apps.apple.com/app/starta-one/id1615783339'

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if(isSupported){
      await Linking.openURL(url);
    } else {
      Alert.alert('Not found')
    }
  }

  function loginInputHandler(enteredLogin){
    setLogin(enteredLogin)
  }

  function passwordInputHandler(enteredPassword){
    setPassword(enteredPassword)
  }

  function fieldCleaning(){
    setLogin('')
    setPassword('')
  }

  function handleLoginSubmit(){
    if (login === 'admin' && password ==='password'){
      navigation.navigate('UserScreen')
      fieldCleaning()
    } else {
      setIsInvalidLogin(true)
      setIsInvalidPassword(true)
    } 
  }

  function handleEyeIconPress() {
    setIsPasswordVisibleToggle(!isPasswordVisibleToggle);
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center', alignContent: 'center'}}>
      <View>
      <View style={styles.logoImg}>
        <Image source={require('./../assets/logo.png')} style={{alignSelf: 'center'}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.captionText}>Welcome to Starta!</Text>
        <Text style={styles.subheadingText}>new ecosystem for service bookings</Text>
      </View>
      <Text style={[styles.label, isInvalidLogin && styles.invalidInput]}>
        {isInvalidLogin ? 'Incorrect login' : 'Enter your e-mail address or username'}
      </Text>
      <View>
        <TextInput style={[styles.input, isInvalidLogin && styles.invalidInput]}
          placeholder='Email or username'
          onChangeText={loginInputHandler}
          value={login}
        />
      </View>
      <Text style={[styles.label, isInvalidPassword && styles.invalidInput]}>
        {isInvalidPassword ? 'Incorrect password' : 'Password'}
      </Text>
      <View>
        <TextInput style={[styles.input, isInvalidPassword && styles.invalidInput]}
          placeholder="Enter your password"
          onChangeText={passwordInputHandler}
          value={password}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={handleEyeIconPress}>
          {isPasswordVisibleToggle ? <СrossOutEyeIcon /> : <EyeIcon />}
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 5, marginLeft: 270 }}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordComponent}>Forgot password</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <LinearGradient
          colors={['#768DFF', '#4766F4']}
          style={styles.button}
        >
          <TouchableOpacity style={styles.button} onPress={handleLoginSubmit}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View >
      <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center', alignContent: 'center'}}>
      <Text style={styles.newAccountText}>
        Don’t have an account?{' '}
      </Text>
      <TouchableOpacity>
          <Text style={{ color: '#4766F4', textDecorationLine: 'underline' }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        </View>
      <View style={styles.lineContainer}>
        <View style={styles.leftLineContainer}>
          <Image source={require('./../assets/line.png')} />
        </View>
        <Text style={styles.connectText}>or connect with</Text>
        <View style={styles.rightLineContainer}>
          <Image source={require('./../assets/line.png')} />
        </View>
      </View>
      <View style={styles.lineContainer}>
        <TouchableOpacity style={{ marginLeft: 20, marginRight: 20 }}
          onPress={() => { openUrl(urlGoogle) }}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20, marginRight: 20 }}
          onPress={() => { openUrl(urlFacebook) }}>
          <FacebookIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20, marginRight: 20 }}
          onPress={() => { openUrl(urlIos) }}>
          <IosIcon />
        </TouchableOpacity>
      </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  logoImg:{
    marginTop: 10,
    justifyContent: 'center', 
    alignContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 2,
    paddingHorizontal: 8,
  },
  textContainer:{
    justifyContent: 'center',
    alignContent: 'center',
  },
  captionText: {
    color: '#000', 
    fontSize: 30, 
    fontStyle: 'normal', 
    fontWeight: '700', 
    lineHeight: undefined,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',  
  },
  subheadingText:{
    color: '#000',
    textAlign: 'center',  
    fontSize: 16, 
    fontStyle: 'normal', 
    fontWeight: '400', 
    textTransform: 'lowercase',
  }, 
  label: {
    color: '#000',
    fontSize: 12, 
    fontStyle: 'normal', 
    fontWeight: '400', 
    lineHeight: undefined, 
    letterSpacing: 0.36, 
    width: '100%',
    marginTop: 15,
    marginBottom: 10
  },
  button: {
    flexDirection: 'row',
    height: 49,
    paddingVertical: 12,
    paddingHorizontal: 74,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: undefined,
  },
  forgotPasswordComponent: {
    color: '#4766F4',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: undefined,
  },
  newAccountText:{
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  invalidInput: {
    color: 'red',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  leftLineContainer: {
    height: 1,
    marginRight: 10,
  },
  rightLineContainer: {
    height: 1,
    marginLeft: 10,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center', 
    alignContent: 'center'
  },
});