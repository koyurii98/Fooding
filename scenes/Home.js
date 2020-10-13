import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, BackHandler, Alert } from 'react-native';

import Item from '../component/Item';

function Home(props) {
    const [ menuBorder, setMenuBorder ] = useState(0); 

    const itemList = props.route.params.items;

    const menu = [
        { num: 0, text: "판매" },
        { num: 1, text: "요청" },
    ];

    const [ refresh, setRefresh ] = useState(false);
    
    function refreshFunc() {
        setRefresh(true);
        console.log("refresh !");
        setRefresh(false);
    }

    function itemClick(obj) {
        props.navigation.navigate("Detail", obj);
    }

    function menuClick(num) {
        console.log("menu click", num)
        setMenuBorder(num);
    }

    const backAction = () => {
        Alert.alert("확인", "종료 하시겠습니까?", [
            { text: "종료", onPress: () => BackHandler.exitApp() }, 
            {  text: "취소", onPress: () => null, style: "cancel" }
        ]);
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }
    }, [itemList]);

    return (
        <View>
            {/* banner */}
            <View style={homeStyle.banner}>
                <Image source={require("../assets/Banner.png")} />
            </View>

            {/* menu */}
            <View style={homeStyle.menuBar}>
                {
                    menu.map(data => {
                        return <TouchableOpacity 
                            onPress={() => menuClick(data.num)} 
                            key={data.num} 
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: "50%",
                                height: "100%",
                                borderBottomWidth: data.num === menuBorder ? 2 : 0,
                                borderColor: "red",
                            }}
                        >
                            <Text>{data.text}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>

            {/* list */}
            <SafeAreaView style={homeStyle.list}>
                <FlatList 
                    data={itemList}
                    renderItem={
                        ({item}) => <Item 
                            id={item.id}
                            userId={item.userId}
                            title={item.title}
                            content={item.content}
                            image={item.image}
                            name={item.user.name}
                            distance={item.user.address}
                            state={item.state}
                            itemClick={itemClick}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 336 }}
                    refreshing={refresh}
                    onRefresh={refreshFunc}
                    style={homeStyle.listView}
                />
            </SafeAreaView>
        </View>
    )
}

const homeStyle = StyleSheet.create({
    // banner
    banner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: 123,
        position: "relative"
    },

    // menu
    menuBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor:"#d9d9d9",
        backgroundColor:"#ffffff",
    },
    list:{
        height:"100%",
        backgroundColor:"#ffffff",
    },
});

export default Home;