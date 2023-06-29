import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

function UserScreen() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

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
});


export default UserScreen;