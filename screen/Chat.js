import React from 'react';
import { StyleSheet, Text, View, Button ,Image,TextInput,ScrollView} from 'react-native';
import moment from 'moment';
import TestImg from '../assets/testImg.png';
function Chat({ route, navigation }) {

	let Date = moment().format('YYYY년MM월DD일');

	return (
		<View style={styles.chattingRoom}>
			<ScrollView>
					<Text style={styles.chattingDate}>{Date}</Text>
						<View style={styles.chattingBoxUser}>
							<View style={styles.chatUser}>
								<View style={styles.Product} >
									<Image style={styles.ProductImg} source={TestImg}/>
									<Text  style={styles.productTitle}>[식재료]채소판매</Text>
									<View style={styles.productInfo}>
										<Text>꼬부맘</Text>
										<Text style={{color:"#ff6767"}}>10km</Text>
									</View>
								</View>
								<Text style={{margin:10,fontWeight:"700"}} >홍길동님이 거래를 신청하였습니다.</Text>
							</View>
						</View>
						<View style={styles.chattingBoxUser}>
							<View style={styles.chatUser}>
								<View style={styles.Product} >
									<Image style={styles.ProductImg} source={TestImg}/>
									<Text  style={styles.productTitle}>[식재료]채소판매</Text>
									<View style={styles.productInfo}>
										<Text>꼬부맘</Text>
										<Text style={{color:"#ff6767"}}>10km</Text>
									</View>
								</View>
								<Text style={{margin:10,fontWeight:"700"}} >홍길동님이 거래를 신청하였습니다.</Text>
							</View>
						</View>
						<View style={styles.chattingBoxUser}>
							<Text style={styles.chatUser}>안녕하세요 채소판매 글 보고 연락드려요!
							혹시 햄이나삼겹살같은걸로 교환가능할까요?ㅎㅎ</Text>
						</View>
						<View style={styles.chattingBoxConsumer}>
							<View>
								<Text style={{marginLeft:20,marginBottom:5,fontWeight:"700"}}>꼬부맘</Text>
								<Text style={styles.chatConsumer}>안녕하세요~ 당연히 되죠! 어떤 채소드릴까요?</Text>
							</View>
						</View>
						<View style={styles.chattingBoxUser}>
							<Text style={styles.chatUser}>저는 양파랑 파 당근필요해요!</Text>
						</View>
					</ScrollView>
				<View style={styles.chattingInputBox}>
					<TextInput style={styles.chattingInput}></TextInput>
					<Button title="전송" color="#ff6767" />
				</View>
		</View>
	);
}
const styles = StyleSheet.create({
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
		maxWidth:"80%",
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
		maxWidth:"80%",
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
  

export default Chat;