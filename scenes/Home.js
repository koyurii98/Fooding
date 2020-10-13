import React, { useState, useEffect } from 'react';
import { StyleSheet,View, Image, BackHandler, Alert,Text, ScrollView, TouchableOpacity } from 'react-native';
import {Card} from 'native-base';


function Home(props) {
    const backAction = () => {
        Alert.alert("확인", "종료 하시겠습니까?", [
            { text: "취소", onPress: () => null, style: "cancel" }, 
            {  text: "종료", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }
    });
    return (
        <ScrollView>
            <View style={homeStyle.homebox}>
                {/* cate */}
                <View style={homeStyle.cate}>
                    <TouchableOpacity style={homeStyle.imgBox}>
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/apple.png')}/>
                        <Text style={homeStyle.cateTtile}>과일</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyle.imgBox}>
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/gocu.png')}/>
                        <Text style={homeStyle.cateTtile}>채소</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={homeStyle.imgBox}>  
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/fish.png')}/>
                        <Text style={homeStyle.cateTtile}>해산물</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity style={homeStyle.imgBox}> 
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/meet.png')}/>
                        <Text style={homeStyle.cateTtile}>육류</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={homeStyle.imgBox}> 
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/rice.png')}/>
                        <Text style={homeStyle.cateTtile}>밥/반찬</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={homeStyle.imgBox}>  
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/freez.png')}/>
                        <Text style={homeStyle.cateTtile}>냉동식품</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={homeStyle.imgBox}> 
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/bread.png')}/>
                        <Text style={homeStyle.cateTtile}>제과/제빵</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={homeStyle.imgBox}>   
                        <Image style={homeStyle.cateIcon} source={require('../assets/Cate/dissert.png')}/>
                        <Text style={homeStyle.cateTtile}>디저트/간식</Text>
                    </TouchableOpacity>  
                </View>
                {/* banner */}
                <View style={homeStyle.banner}>
                    <Image source={require("../assets/Banner.png")} style={{resizeMode:"contain"}}/>
                </View>
                <View style={homeStyle.recomm}>
                    <Text style={homeStyle.recommTitle}>#이런 음식 어때요?</Text>
                    <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={homeStyle.recomm}>
                    <Text style={homeStyle.recommTitle}>#이런 음식 어때요?</Text>
                    <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:3}}> 
                            <Card style={homeStyle.recommCard}>

                            </Card>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

const homeStyle = StyleSheet.create({
    homebox:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"#ffffff",
    },
    //cate
    cate:{
        width:"95%",
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:20
    },
    cateTtile:{
        fontSize:13,
        color:"#757575",
        fontWeight:"700",
    },
    imgBox:{
        justifyContent:"center",
        alignItems:"center",
    },
    // banner
    banner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: 123,
        position: "relative"
    },
    cateIcon:{
        resizeMode:"contain",
        width:66,
        height:66,
        margin:13,
    },
    recomm:{
        flexDirection:"column",
        width:"100%",
        paddingTop:10,
      
    },
    recommTitle:{
        fontSize:18,
        fontWeight:"700",
        color:"#ff6767",
        margin:10,
        textAlign:"left"

    },
    recommBox:{
        height:170,
        width:"100%",
        margin:10
    },
    recommCard:{
        width:165,
        height:149,
        borderRadius:10,
        backgroundColor:"#d9d9d9",
    }
});

export default Home;