import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Button  } from 'react-native';


function SignInScreen({navigation}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function loginInputHandler(enteredLogin){
    setLogin(enteredLogin)
  }

  function passwordInputHandler(enteredPassword){
    setPassword(enteredPassword)
  }

  function handleLoginSubmit(){
    if (login === 'admin' && password ==='password'){
      navigation.navigate('UserScreen')
    } else {
      Alert.alert(
        'Unauthorised login or password!',
        'Please check your username or password.',
        [{text: 'Okay', style: 'destructive'}]
      )
    }
  }

  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input}
      placeholder='Enter login'
      onChangeText={loginInputHandler}
      value={login}
      >
      </TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        onChangeText={passwordInputHandler}
        value={password}
        secureTextEntry
        >
        </TextInput>
        <Button title="Log in" onPress={handleLoginSubmit} />
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});