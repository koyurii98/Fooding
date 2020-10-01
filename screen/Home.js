import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './Detail';

const HomeStack = createStackNavigator();

function Home({ route, navigation }) {
    const [ menuBorder, setMenuBorder ] = useState(0); 
    const menu = [
        { num: 0, text: "NOW" },
        { num: 1, text: "반찬" },
        { num: 2, text: "베이커리" },
        { num: 3, text: "식재료" }
    ];

    const [ refresh, setRefresh ] = useState(false);
    const example = [
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
    ];

    const Item = ({ id, name, content, user, distance, state }) => {
        const obj = { id, name, content, user, distance, state };
        return <TouchableOpacity style={homeStyle.listBox} onPress={() => itemClick(obj)}>
            <View style={homeStyle.listImage}></View>
            <View style={homeStyle.listContent}>
                <View style={homeStyle.listLayout}>
                    <Text style={{ fontSize: 20, marginBottom: 5 }}>{name}</Text>
                    <Text style={{ color: "red" }}>{state}</Text>
                </View>
                <View>
                    <Text style={{ color: "gray" }} numberOfLines={1}>{content}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", position: "absolute", bottom: 0 }}>
                    <Text>{user}</Text>
                    <View style={homeStyle.listLine}></View>
                    <Text>{distance}</Text>
                </View>
            </View>
        </TouchableOpacity>
    }

    function refreshFunc() {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
        }, 1000);
    }

    function itemClick(obj) {
        navigation.navigate("detail", obj);
    }

    function menuClick(num) {
        setMenuBorder(num);
    }

    const Home = () => {
        return <View>
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
                                width: "25%",
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
                    data={example}
                    renderItem={
                        ({item}) => <Item 
                            id={item.id}
                            name={item.name}
                            content={item.content}
                            user={item.user}
                            distance={item.distance}
                            state={item.state}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 336 }}
                    refreshing={refresh}
                    onRefresh={refreshFunc}
                />
            </SafeAreaView>
        </View>
    }

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} />
            <HomeStack.Screen name="detail" component={Detail} />
        </HomeStack.Navigator>
    );
}

const homeStyle = StyleSheet.create({
    // banner
    banner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: "#e9aaff",
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
        borderStyle: "solid"
    },

    // list
    listBox: {
        display: "flex", 
        flexDirection: "row", 
        height: 130,
        borderBottomWidth: 0.2,
        borderColor: "gray", 
        padding: 15,
        margin: 10
    },
    listImage: {
        height: "100%",
        width: "30%", 
        backgroundColor: "blue"
    },
    listContent: {
        display: "flex", 
        flexDirection: "column", 
        width: "70%",
        marginLeft: 5,
        position: "relative"
    },
    listLayout: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    listLine: {
        height: 20, 
        borderWidth: 1, 
        borderStyle: "solid",
        marginLeft: 8,
        marginRight: 8
    }
});

export default Home;