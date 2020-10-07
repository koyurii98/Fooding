// import React from 'react';
// import {StyleSheet,TouchableOpacity,Text} from 'react-native';
// import {ListItem, Left, Body, Right, Thumbnail } from 'native-base';
// import profileNull from '../assets/profile.png';

// function ChatItem({ id, userName, profile, chatText, time,ChatClick}) {
//   const obj = { id, userName, profile, chatText, time};
//   return<TouchableOpacity style={chatItemStyles.view}>
//       <ListItem avatar style={chatItemStyles.List} onPress={() => ChatClick(obj)}>
//         <Left style={{height:80}}>
//           <Thumbnail source={profile||profileNull} />
//         </Left>
//         <Body style={{height:80}}>
//           <Text style={chatItemStyles.name}>{userName}</Text>
//           <Text>{chatText}</Text>
//         </Body>
//         <Right style={{height:80}}>
//           <Text style={{color:"#afafaf"}}>{time}</Text>
//         </Right>
//       </ListItem>
//     </TouchableOpacity>
//     }
// const chatItemStyles = StyleSheet.create({
//   view:{
//     margin:0,
//     backgroundColor:"white",
//     color:"#707070",
//     height:80,
//   },
//   List:{
//     height:80,
//   },
//   name:{
//     fontSize:16,
//     fontWeight:"700",
//   }
// })

// export default ChatItem;