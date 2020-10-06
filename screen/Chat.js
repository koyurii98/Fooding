import React, { useState, useEffect } from 'react';
import { StyleSheet,FlatList,SafeAreaView,View,Image,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Chatting from './Chatting';
import ChatItem from  '../component/ChatItem';
import ChatHeader from '../component/ChatHeader';

const ChatStack = createStackNavigator();

function Chat({ route, navigation }) {

	const [ ChatItemList, setChatItemList ] = useState([
		{ id: 0, userName: "꼬부맘", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm" },
		{ id: 1, userName: "초코", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
		{ id: 2, userName: "감자", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
		{ id: 3, userName: "당근", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
		{ id: 4, userName: "딸기", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
		{ id: 5, userName: "바나나", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
		{ id: 6, userName: "피자", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
		{ id: 7, userName: "쿠쿠", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
		{ id: 8, userName: "커피", profile: "", chatText: "저는 당근이랑 파 필요해요!",time:"3:25pm"  },
	]);

	const [refreshChat,setRefreshChat]= useState(false);

	function refreshChatFunc() {
		setRefreshChat(true);
		setRefreshChat(false);
	}
	function ChatClick(obj) {
		navigation.navigate("Chatting", obj);
	}
	const Chat = () => {
		return<SafeAreaView style={chatListstyles.chatList}>
			<FlatList 
				data={ChatItemList}
				renderItem={
					({item}) => <ChatItem 
						id={item.id}
						userName={item.userName}
						profile={item.profile}
						chatText={item.chatText}
						time={item.time}
						ChatClick={ChatClick}
					/>
				}
				keyExtractor={item => item.id.toString()}
				refreshing={refreshChat}
				onRefresh={refreshChatFunc}
			/>
		</SafeAreaView>
	}
	
	return(
		<ChatStack.Navigator>
			<ChatStack.Screen 
				name="Chat" 
				component={Chat} />
			<ChatStack.Screen
				name="Chatting"
				component={Chatting}
				options={{
					headerShown:true,
					headerLeft:false,
					headerTitle:props=>(<ChatHeader {...props}/>)
				}} />
		</ChatStack.Navigator>
	);
}

const chatListstyles = StyleSheet.create({
	chatList:{	
		height:"100%",
		width:"100%",
	},
})


export default Chat;