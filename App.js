import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {WebView} from 'react-native-webview';

const HomeScreen = ({navigation}) => (
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>This is the home screen</Text>
    <TouchableOpacity onPress={ () => navigation.navigate("Chat") }> 
      <Text style={{color:'lightgreen', backgroundColor:'green'}} >Open Live Chat</Text>
       </TouchableOpacity>
  </View>
);

const ChatScreen = () => (
  <View style={{flex:1}}>
    <WebView source={{uri:'https://tawk.to/chat/6436ef8731ebfa0fe7f7f086/1gtr9fc12'}} />
    
  </View>
);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
