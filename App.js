import 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ENV_FUNC from './environment';
const { SERVER_URL } = ENV_FUNC();

import First from './scenes/First';
import Login from './scenes/Login';
import Error from './scenes/Error';
import Header from './component/header/Header';

import Home from './scenes/Home';
import Store from './scenes/Store';
import List from './scenes/List';
import Detail from './scenes/Detail';
import Write from './scenes/Write';
import ChatList from './scenes/chatlist/ChatList';
import ChatListRoom from './scenes/chatlist/ChatListRoom';
import Profile from './scenes/profile/Profile';
import ProfileEdit from './scenes/profile/ProfileEdit';
import ProfileHistory from './scenes/profile/ProfileHistory';

const AppStack = createStackNavigator();

const TabNavigator = createBottomTabNavigator();
const HomeTabStack = createStackNavigator();
const StoreTabStack = createStackNavigator();
const ChatListTabStack = createStackNavigator();
const ProfileTabStack = createStackNavigator();

function HomeTab() {
  return <HomeTabStack.Navigator>
    <HomeTabStack.Screen name="Home" component={Home} 
      options={{ 
        headerLeft: null,
        headerStyle: {
          height: 90
        },
        headerTitle: props => <Header {...props} /> 
      }} 
    />
  </HomeTabStack.Navigator>
}

function StoreTab() {
  return <StoreTabStack.Navigator>
    <StoreTabStack.Screen name="Store" component={Store} options={{ 
        headerLeft: null,
        headerStyle: {
          height: 90
        },
        headerTitle: props => <Header {...props} /> 
      }} 
    />
    <StoreTabStack.Screen name="List" component={List} />
  </StoreTabStack.Navigator>
}

function ChatListTab() {
  return <ChatListTabStack.Navigator>
    <ChatListTabStack.Screen name="ChatList" component={ChatList} options={{ headerLeft: null }} />
  </ChatListTabStack.Navigator>
}

function ProfileTab() {
  return <ProfileTabStack.Navigator>
    <ProfileTabStack.Screen name="Profile" component={Profile} options={{ 
        headerLeft: null,
        headerStyle: {
          height: 90
        },
        headerTitle: props => <Header {...props} /> 
      }} 
    />
    <ProfileTabStack.Screen name="ProfileEdit" component={ProfileEdit} options={{ headerShown: true }} />
    <ProfileTabStack.Screen name="ProfileHistory" component={ProfileHistory} options={{ headerShown: true }} />
  </ProfileTabStack.Navigator>
}

function Tab() {
  return <TabNavigator.Navigator 
    backBehavior="initialRoute" 
    initialRouteName="Home" 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? "A!" : "A..";
        } else if (route.name === 'Store') {
          iconName = focused ? "B!" : "B..";
        } else if (route.name === 'ChatList') {
          iconName = focused ? "C!" : "C..";
        } else if (route.name === 'Profile') {
          iconName = focused ? "D!" : "D..";
        }
        return <Text style={tabStyle.icon}>{iconName}</Text>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <TabNavigator.Screen name="Home" component={HomeTab} />
    <TabNavigator.Screen name="Store" component={StoreTab} />
    <TabNavigator.Screen name="ChatList" component={ChatListTab} />
    <TabNavigator.Screen name="Profile" component={ProfileTab} />
  </TabNavigator.Navigator>
}

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    storageCheck();
  }, [user]);

  async function storageCheck() {
    try {
      let result = await SecureStore.getItemAsync("fooding_user");

      if(result) {
        result = JSON.parse(result);
        // server user sign check code ..

        setUser(result.email);
      }
    } catch(err) {
      Alert.alert("로그인 인증 중 에러가 발생했습니다. 앱을 다시 실행해주세요.");
    }
  }

  return <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name="First" component={First} options={{ headerShown: false }} />
      {
        !user ? 
        <AppStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        :
        <AppStack.Screen name="Login" component={Error} options={{ headerShown: false }} />
      }
      <AppStack.Screen name="Tab" component={Tab} options={{ headerShown: false }} />
      <AppStack.Screen name="Detail" component={Detail} options={{ headerShown: true }} />
      <AppStack.Screen name="Write" component={Write} options={{ headerShown: true }} />
      <AppStack.Screen name="ChatListRoom" component={ChatListRoom} options={{ headerShown: true }} />
    </AppStack.Navigator>
  </NavigationContainer>
}

const tabStyle = StyleSheet.create({
  icon: {

  }
});

export default App;