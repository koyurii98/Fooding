import React from 'react';
import { StyleSheet, Text, View, Button ,Image,TextInput,ScrollView} from 'react-native';
import moment from 'moment';
import TestImg from '../assets/testImg.png';

function Chatting(props) {
	let Date = moment().format('YYYY년MM월DD일');

	return (
		<View style={chattingstyles.chattingRoom}>
			<ScrollView>
					<Text style={chattingstyles.chattingDate}>{Date}</Text>
						<View style={chattingstyles.chattingBoxUser}>
							<View style={chattingstyles.chatUser}>
								<View style={chattingstyles.Product} >
									<Image style={chattingstyles.ProductImg} source={TestImg}/>
									<Text  style={chattingstyles.productTitle}>[식재료]채소판매</Text>
									<View style={chattingstyles.productInfo}>
										<Text>꼬부맘</Text>
										<Text style={{color:"#ff6767"}}>10km</Text>
									</View>
								</View>
								<Text style={{margin:10,fontWeight:"700"}} >홍길동님이 거래를 신청하였습니다.</Text>
							</View>
						</View>
						<View style={chattingstyles.chattingBoxUser}>
							<View style={chattingstyles.chatUser}>
								<View style={chattingstyles.Product} >
									<Image style={chattingstyles.ProductImg} source={TestImg}/>
									<Text  style={chattingstyles.productTitle}>[식재료]채소판매</Text>
									<View style={chattingstyles.productInfo}>
										<Text>꼬부맘</Text>
										<Text style={{color:"#ff6767"}}>10km</Text>
									</View>
								</View>
								<Text style={{margin:10,fontWeight:"700"}} >홍길동님이 거래를 신청하였습니다.</Text>
							</View>
						</View>
						<View style={chattingstyles.chattingBoxUser}>
							<Text style={chattingstyles.chatUser}>안녕하세요 채소판매 글 보고 연락드려요!
							혹시 햄이나삼겹살같은걸로 교환가능할까요?ㅎㅎ</Text>
						</View>
						<View style={chattingstyles.chattingBoxConsumer}>
							<View>
								<Text style={{marginLeft:20,marginBottom:5,fontWeight:"700"}}>꼬부맘</Text>
								<Text style={chattingstyles.chatConsumer}>안녕하세요~ 당연히 되죠! 어떤 채소드릴까요?</Text>
							</View>
						</View>
						<View style={chattingstyles.chattingBoxUser}>
							<Text style={chattingstyles.chatUser}>저는 양파랑 파 당근필요해요!</Text>
						</View>
					</ScrollView>
				<View style={chattingstyles.chattingInputBox}>
					<TextInput style={chattingstyles.chattingInput}></TextInput>
					<Button title="전송" color="#ff6767" />
				</View>
		</View>
	);
}
const chattingstyles = StyleSheet.create({
	chattingRoom:{
		width:"100%",
		height:"100%",
		fontSize:13,
	},
	chattingDate:{
		marginTop:15,
		marginBottom:15,
		width:"100%",
		textAlign:"center",
		fontSize:13,
		color: "#1d1d1d",
	},
	chattingBoxUser:{
		width:"100%",
		justifyContent:"flex-end",
		flexDirection:"row",		
		marginBottom:15,
	},
	chatUser:{
		borderWidth:1,
		borderColor:"#d8d8d8",
		padding:12,
		backgroundColor:"#ffffff",
		maxWidth:"75%",
		marginRight:15,
		borderRadius:7,
		maxHeight:500,
		color:"#1d1d1d",
	},
	chattingBoxConsumer:{
		width:"100%",
		justifyContent:"flex-start",
		flexDirection:"row",		
		marginBottom:15,
	},
	chatConsumer:{
		borderWidth:1,
		borderColor:"#ff4e4e4d",
		padding:12,
		backgroundColor:"#ffeeee69",
		maxWidth:"75%",
		marginLeft:15,
		borderRadius:7,
		maxHeight:500,
		color:"#1d1d1d",
	},
	Product:{
		borderWidth:1,
		padding:10,
		borderColor:"#d8d8d8",
	},	
	ProductImg:{
		width:210,
		height:180,
	},
	productTitle:{
		fontSize:18,
		fontWeight:"700",
		marginTop:10,
		marginBottom:10
	},
	productInfo:{
		flexDirection:"row",
		justifyContent:"space-between",
		fontSize:15,
	},
	chattingInputBox:{
		width:"100%",
		height:60,
		backgroundColor:"#ffffff",
		bottom:0,
		justifyContent:"space-around",
		alignItems:"center",
		flexDirection:"row",
	},
	chattingInput:{
		borderWidth:1,
		borderColor:"#979797",
		borderRadius:11,
		width:"78%",
		height:45,
		fontSize:16,
		padding:10,
	},
})

export default Chatting;