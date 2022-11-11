import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function HomeScreen() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  )
}

function UserScreen() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>User</Text>
      <Button
        title="Edit User"
        onPress={() => navigation.navigate('EditUser')}
      />
    </View>
  )
}

function EditUserScreen() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Edit User</Text>
      <Button
        title="Back Home"
        onPress={() => navigation.navigate('Home')} // Notice that there is no longer a "Back" button
        // onPress={() => navigation.push('Home')} // Notice that you are on "Home", but there *is* a back button that would route back to EditUserScreen
      />
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='User' component={UserScreen} />
        <Stack.Screen name='EditUser' component={EditUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
