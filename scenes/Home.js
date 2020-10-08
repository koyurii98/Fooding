import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, BackHandler, Alert } from 'react-native';

import Item from '../component/Item';

function Home(props) {
    const [ menuBorder, setMenuBorder ] = useState(0); 
    const [ itemList, setItemmList ] = useState([
        { id: 0, name: "반찬1", image: "", content: "설명 부분입니다. 해당 내용은 반찬1 입니다.", user: "꼬부맘1", distance: "10km 이내", state: "판매" },
        { id: 1, name: "반찬2", image: "", content: "설명 부분입니다. 해당 내용은 반찬2 입니다.", user: "꼬부맘2", distance: "11km 이내", state: "요청" },
        { id: 2, name: "반찬3", image: "", content: "설명 부분입니다. 해당 내용은 반찬3 입니다.", user: "꼬부맘3", distance: "12km 이내", state: "판매" },
        { id: 3, name: "반찬4", image: "", content: "설명 부분입니다. 해당 내용은 반찬4 입니다.", user: "꼬부맘4", distance: "13km 이내", state: "요청" },
        { id: 4, name: "반찬5", image: "", content: "설명 부분입니다. 해당 내용은 반찬5 입니다.", user: "꼬부맘5", distance: "14km 이내", state: "판매" },
        { id: 5, name: "반찬6", image: "", content: "설명 부분입니다. 해당 내용은 반찬6 입니다.", user: "꼬부맘6", distance: "15km 이내", state: "판매" },
        { id: 6, name: "반찬7", image: "", content: "설명 부분입니다. 해당 내용은 반찬7 입니다.", user: "꼬부맘7", distance: "16km 이내", state: "요청" },
        { id: 7, name: "반찬8", image: "", content: "설명 부분입니다. 해당 내용은 반찬8 입니다.", user: "꼬부맘8", distance: "17km 이내", state: "요청" },
        { id: 8, name: "반찬9", image: "", content: "설명 부분입니다. 해당 내용은 반찬9 입니다.", user: "꼬부맘9", distance: "18km 이내", state: "판매" },
        { id: 9, name: "반찬10", image: "", content: "설명 부분입니다. 해당 내용은 반찬10 입니다.", user: "꼬부맘10", distance: "19km 이내", state: "판매" },
    ]);

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
                            name={item.name}
                            content={item.content}
                            user={item.user}
                            distance={item.distance}
                            state={item.state}
                            itemClick={itemClick}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 336 }}
                    refreshing={refresh}
                    onRefresh={refreshFunc}
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