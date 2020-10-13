import React from 'react';
import { StyleSheet, Text, View, Button,Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
function Detail(props) {
    const clickDeal = ()=>{
        Alert.alert("확인", "거래를 하시겠습니까?", [
            { text: "거래하기", onPress: () => console.log("거래"), style: "cancel" },
            { text: "취소", onPress: () => null, style: "cancel" }
          ]);
    }
    return (
        <View style={detailStyle.detailBox}>
            <ScrollView style={{height:"100%",paddingBottom:66}}>
                <View style={{height:340}}>
                    <Image style={detailStyle.productImg} source={require('../assets/example.png')}/>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Image style={{position:"relative",left:10,top:15}}source={require('../assets/retrunWhite.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:"100%",padding:17,borderBottomWidth:1,borderBottomColor:"#d2d2d2"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={detailStyle.productTitle}>[식재료]채소판매</Text>
                        <Text style={detailStyle.productState}>요청</Text> 
                    </View>
                    <Text style={detailStyle.uploadDate}>2020년 10월 08일</Text>
                    <Text style={detailStyle.productInfo}>
                    채소를 시켰는데 생각보다 많이왔네요,,^^..
                    감자,당근 있습니다^^ 
                    교환이나 구매 의향 있으시면 메세지 주세요~^^
                    </Text>
                </View>
                <View style={detailStyle.userProfile}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={{resizeMode:"contain",width:65,marginLeft:15}} source={require('../assets/profile.png')} />
                        <View style={{marginLeft:15}}>
                            <View style={detailStyle.userInfo}>
                                <Image source={require('../assets/puddingIcon.png')}/>
                                <Text style={detailStyle.userName}>꼬부맘</Text>
                            </View>
                            <Text style={detailStyle.Recent}>최근 5건의 거래를 하였습니다.</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>alert("스토어")}>
                        <Image style={detailStyle.userStore} source={require('../assets/store.png')}/>
                        <Text style={{color:"#1d1d1d",fontSize:12,marginLeft:3}}>스토어방문</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={detailStyle.bottomBtns}>
                    <TouchableOpacity style={detailStyle.BuyMenu} onPress={()=>alert('메뉴클릭')}>
                        <Image source={require('../assets/menu-White.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={detailStyle.BuyBtn} onPress={clickDeal}>
                        <Text style={{color:"#ffffff",fontSize:20}}>거래신청하기</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
const detailStyle = StyleSheet.create({
    detailBox:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#ffffff",
        height:"100%",
    },
    productImg:{
        width:"100%",
        height:340,
        resizeMode:"cover",
        position:"absolute"
    },
    productTitle:{
        fontSize:22,
        color:"#4a4a4a",
        fontWeight:"700",
    },
    productState:{
        fontSize:16,
        color: "#ff6767"
    },
    uploadDate:{
        fontSize:12,
        color:"#777777",
        marginTop:8,
        marginBottom:8,
    },
    productInfo:{
        fontSize:16,
        color:"#1d1d1d",
        lineHeight:25,
        marginTop:10
    },
    userProfile:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:85,
    },
    userInfo:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:3,
    },
    userName:{
        fontSize:16,
        color:"#1d1d1d",
        margin:5,
        fontWeight:"700"
    },
    Recent:{
        fontSize:13,
        color:"#858585"
    },
    userStore:{
        resizeMode:"contain",
        width:60,
        height:60,
        marginRight:15,
    },
    bottomBtns:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        height:60,
    },
    BuyMenu:{
        width:"20%",
        backgroundColor:"gray",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    BuyBtn:{
        width:"80%",
        backgroundColor:"#ff6767",
        bottom:0,
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    }
    
})

export default Detail;