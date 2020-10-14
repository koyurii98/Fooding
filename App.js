import 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, Image } from 'react-native';
import {Root} from 'native-base'
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import socketIO from 'socket.io-client';

import ENV_FUNC from './environment';
const { SERVER_URL } = ENV_FUNC();

import First from './scenes/First';
import Login from './scenes/login/Login';
import Error from './scenes/Error';
import Header from './component/header/Header';

import Home from './scenes/Home';
import Store from './scenes/Store';
import List from './scenes/List';
import Detail from './scenes/Detail';
import Write from './scenes/Write';
import EditWrite from './scenes/EditWrite';
import ChatList from './scenes/chatlist/ChatList';
import ChatListRoom from './scenes/chatlist/ChatListRoom';
import Profile from './scenes/profile/Profile';
import ProfileEdit from './scenes/profile/ProfileEdit';
import ProfileHistory from './scenes/profile/ProfileHistory';
import ProfileHeader from './component/header/ProfileHeader';

import HistoryHeader from './component/header/HistoryHeader';

const AppStack = createStackNavigator();

const TabNavigator = createBottomTabNavigator();
const HomeTabStack = createStackNavigator();
const StoreTabStack = createStackNavigator();
const ChatListTabStack = createStackNavigator();
const ProfileTabStack = createStackNavigator();

const socket = socketIO.connect(SERVER_URL);

function App() {
  // 유저 정보 ( 로그인 유저 )
  const [ login, setLogin ] = useState({
    id : 0,
    email : null
  });
  // 초기 데이터 중, 최근 게시글 데이터
  const [ items, setItems ] = useState([]);
  // 로그인 한 유저의 채팅방 데이터
  const [ rooms, setRooms ] = useState([]);

  useEffect(() => {
    storageCheck();
    itemsGet();
  }, [login]);

  // 시큐어 스토리지 체크
  async function storageCheck() {
    try {
      let result = await SecureStore.getItemAsync("fooding_user");
      console.log("storage check");
      if(result) {
        result = JSON.parse(result);
        // server user sign check code ..

        setLogin(result.email);
      }
      
      socket.emit("user connect", { msg : login.email });
    } catch(err) {
      console.log(err);
      Alert.alert("로그인 실패", "로그인 인증 중 에러가 발생했습니다. 앱을 다시 실행해주세요.",
        [{ text: "확인", onPress: () => null, style: "cancel" }, ]
      );
    }
  }

  // 스토어에 보여줄 아이템 가져오기 ( 최근 데이터 순 로드 )
  async function itemsGet() {
    try {
      const result = await axios.get(`${SERVER_URL}/board/all`);

      if(result.data && result.data.data) {
        setItems(result.data.data);
      } else {
        throw "err";
      }
    } catch(err) {
      Alert.alert("실패", "데이터 로드 중 에러가 발생했습니다. 다시 시도해 주세요.", [
        { text: "확인", onPress: () => null, style: "cancel" }
      ]);
    }
  }








// ============================= ============================= Navigation Stack AND Tab ============================= ============================= //

function HomeTab() {
    return <HomeTabStack.Navigator>
      <HomeTabStack.Screen name="Home" component={Home} initialParams={{ login }}
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
      <StoreTabStack.Screen name="Store" component={Store} initialParams={{ login, items, setItems }}
        options={{ 
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
      <ChatListTabStack.Screen 
        name="ChatList" 
        component={ChatList} 
        options={{ headerLeft: null }} 
        initialParams={{ login, rooms, setRooms }}
      />
    </ChatListTabStack.Navigator>
  }
  
  function ProfileTab() {
    return <ProfileTabStack.Navigator 
      initialRouteName="Profile" 
    >
      <ProfileTabStack.Screen name="Profile" component={Profile} options={{ 
          headerLeft: null,
          headerStyle: {
            height: 90
          },
          headerTitle: props => <Header {...props} /> 
        }} 
        initialParams={{ login }}
      />
      <ProfileTabStack.Screen name="ProfileEdit" component={ProfileEdit} options={{ 
        headerShown: true,
        header: ({ navigation }) => {
          return <ProfileHeader navigation={navigation} />
        },
        headerLeft: null,  
        headerStyle: {
            height: 90
          },
        }} 
      />
      <ProfileTabStack.Screen name="ProfileHistory" component={ProfileHistory} options={{
        headerShown: true,
        header: ({ navigation }) => {
          return <HistoryHeader navigation={navigation} />
        },
        headerLeft: null,
        headerStyle: {
          height: 90
          },
        }} 
      />
    </ProfileTabStack.Navigator>
  }

  function Tab() {
    return <TabNavigator.Navigator 
      backBehavior="initialRoute" 
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? require('./assets/Menu/home-c.png') : require('./assets/Menu/home-g.png');
          } else if (route.name === "Store") {
            iconName = focused ?require('./assets/Menu/list-c.png') : require('./assets/Menu/list-g.png');
          } else if (route.name === "ChatList") {
            iconName = focused ? require('./assets/Menu/chat-c.png') : require('./assets/Menu/chat-g.png');
          } else if (route.name === "Profile") {
            iconName = focused ? require('./assets/Menu/mypage-c.png') : require('./assets/Menu/mypage-g.png');
          }
          return <Image source={iconName} style={tabStyle.icon}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ff6767",
        inactiveTintColor: "#7e7e7e",
      }}
    >
      <TabNavigator.Screen name="Home" component={HomeTab} options={{ title : "홈" }} />
      <TabNavigator.Screen name="Store" component={StoreTab} options={{ title : "스토어" }} />
      <TabNavigator.Screen name="ChatList" component={ChatListTab} options={{ title : "채팅" }} 
        listeners={({ navigation }) => ({
          tabPress: e => {
            if(!login.email) {
              e.preventDefault();
              Alert.alert("확인", "로그인 후 이용해주세요.", [
                { text: "로그인 하러가기", onPress: () => navigation.navigate("Login"), style: "cancel" },
                { text: "취소", onPress: () => null, style: "cancel" }
              ]);
            }
          }
        })}
      />
      <TabNavigator.Screen name="Profile" component={ProfileTab} options={{ title : "마이페이지" }}
        listeners={({ navigation }) => ({
            tabPress: e => {
              if(!login.email) {
                e.preventDefault();
                Alert.alert("확인", "로그인 후 이용해주세요.", [
                  { text: "로그인 하러가기", onPress: () => navigation.navigate("Login"), style: "cancel" },
                  { text: "취소", onPress: () => null, style: "cancel" }
                ]);
              }
            }
        })}
      />
    </TabNavigator.Navigator>
  }

  return<Root>
    <NavigationContainer>
    <AppStack.Navigator initialParams={{ login }}>
      <AppStack.Screen name="First" component={First} options={{ headerShown: false }} />
      {
        !login.email ? 
        <AppStack.Screen name="Login" component={Login} initialParams={{ Screen: "Tab", setLogin, socket, setRooms }} options={{ headerShown: false }} />
        :
        <AppStack.Screen name="Login" component={Error} options={{ headerShown: false }} />
      }
      <AppStack.Screen name="Tab" component={Tab} options={{ headerShown: false }} />
      <AppStack.Screen name="Detail" component={Detail} initialParams={{ login, rooms, setRooms }}
        options={{headerLeft: null,
          headerStyle: {
            height: 90
          },
          headerTitle: props => <Header {...props} /> 
        }} 
      />
      <AppStack.Screen name="Write"  component={Write}
        initialParams={{ login, items, setItems }}
        options={{ 
          headerStyle: {
            height: 90,
          },
        }}
      />
       <AppStack.Screen name="EditWrite"  component={EditWrite}
        initialParams={{ login, items, setItems }}
        options={{ 
          headerStyle: {
            height: 90,
          },
        }}
      />
      <AppStack.Screen 
        name="ChatListRoom" 
        component={ChatListRoom} 
        initialParams={{ socket }}
        options={{ 
          headerShown: false,
        }} 
      />
    </AppStack.Navigator>
  </NavigationContainer>
  </Root>
}

const tabStyle = StyleSheet.create({
  icon: {
    resizeMode:"contain",
    width:"65%",
    height:"65%",
  }
});

export default App;