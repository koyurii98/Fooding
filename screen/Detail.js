import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Card} from 'native-base';
import Chatting from './Chatting';
import ChatHeader from '../component/ChatHeader';
import puddingIcon from '../assets/puddingIcon.png'
const DetailStack = createStackNavigator();

function Detail({ route, navigation }) {
    const { id, name, image, content, user, distance, state } = route.params;
   
    function ChatClick() {
		navigation.navigate("Chatting");
	}
    const Detail = ()=>{
        return <View style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "white"}}>
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}
        >
            <Image
                style={{ margin: 20 }}
                source={image || require("../assets/retrunWhite.png")}
            ></Image>
        </TouchableOpacity>
        <ScrollView>
            <Image
                style={{ width: "100%", backgroundColor: "white", height: 400 }}
                resizeMode="cover"
                source={require("../assets/example.png")}   // image source props..
            ></Image>

            {/* cate props.. */}
            <View style={detailStyle.titleView}>
                <Text style={detailStyle.title}>{`[식재료] ${name}`}</Text>
            </View>
            <View style={detailStyle.contentView}>
                <Text style={detailStyle.content}>
                    {`${content}`}
                </Text>
            </View>
            <View style={detailStyle.infoContainer}>
                <Card style={detailStyle.infoView}>
                    <View style={{ width: "65%", marginRight: 10 }}>
                        <View style={detailStyle.infoLayout}>
                            <View style={detailStyle.infoLayout}>
                                <Image source={puddingIcon} style={{ width: 25, height: 25, marginRight: 5,resizeMode:"contain" }}/>
                                <Text style={detailStyle.infoUser}>{user}</Text>
                            </View>
                            <Text style={detailStyle.infoDistance}>{distance}</Text>
                        </View>
                        <Text numberOfLines={1}>{"최근 5건의 거래를 하였습니다."}</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Button 
                            onPress={() => ChatClick()}
                            title={`거래 신청하기`}
                            color="#ff6767"
                            width="100%"
                        ></Button>
                    </View>
                </Card>
            </View>
        </ScrollView>
    </View>
    }
    return (
    	<DetailStack.Navigator>
			<DetailStack.Screen 
				name="Detail" 
				component={Detail} />
			<DetailStack.Screen
				name="Chatting"
				component={Chatting}
				options={{
					headerShown:true,
					headerLeft:false,
					headerTitle:()=>(<ChatHeader/>)
				}} />
		</DetailStack.Navigator>
    );
}

const detailStyle = StyleSheet.create({
    titleView: {
        height: 61,
        borderBottomWidth: 0.2,
        borderColor: "gray",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 14,
    },

    contentView: {
        margin: 15,
    },
    content: {
        fontSize: 15,
        lineHeight: 20,
        minHeight: 70
    },

    infoContainer: {
        display: "flex",
        alignItems: "center",
    },  
    infoView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        padding: 20,
        borderRadius: 5,
    },
    infoLayout: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 5,
    },
    infoUser: {
        fontSize: 20,
        marginBottom: 5
    },
    infoDistance: {
        color: "#ff6767",
        fontSize: 12,
    },
});

export default Detail;