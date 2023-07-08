import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button} from 'react-native';

function UserScreen() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userNumber, setUserNumber] = useState('')

  function userNameInputHandler(enteredName){
    setUserName(enteredName)
  }

  function userEmailInputHandler(enteredEmail){
    setUserEmail(enteredEmail)
  }

  function userNumberInputHandler(enteredNumber){
    setUserNumber(enteredNumber)
  }

  function cleanOutFields(){
    setUserName('')
    setUserEmail('')
    setUserNumber('')
  }

  function handleAddGoal() {
    if (userName && userEmail && userNumber) {
      const newUser = {
        name: userName,
        email: userEmail,
        phone: userNumber,
      };
      setUsers([...users, newUser, {key: Math.random().toString()}]);
      cleanOutFields();
    }
  }

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          onChangeText={userNameInputHandler}
          value={userName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter email"
          onChangeText={userEmailInputHandler}
          value={userEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter number"
          onChangeText={userNumberInputHandler}
          value={userNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add user" color='#b180f0' onPress={handleAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color='#f31282' onPress={cleanOutFields}/>
          </View>
        </View>
      {
        loading ? (<Text>Loading...</Text>) : (
          users.map((user) => {
          return(
            <View style={styles.userContainer} key={user.id}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
              <Text style={styles.phone}>{user.phone}</Text>
            </View>
          )})
        )
      }
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  userContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: '#e4d0ff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  textInput: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer:{
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});
export default UserScreen;