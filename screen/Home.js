import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';

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

    const Item = ({ name, content, user, distance, state }) => {
        return <View style={homeStyle.listBox}>
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
                    <View style={{alignItems:"center",flexDirection:"row"}}>
                        <View style={homeStyle.listLine}></View>
                        <Text style={{color:"#e15959"}}>{distance}</Text>
                    </View>
                </View>
            </View>
        </View>
    }

    function refreshFunc() {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
        },300);
    }

    function menuClick(num) {
        setMenuBorder(num);
    }

    return (
        <View>
            {/* baner */}
            <View style={homeStyle.baner}>
                <Text style={homeStyle.banerText}>
                    배달비 0원{"\n"}
                    식재료부터 반찬까지{"\n"}
                    직거래로 내가 원하는 음식을 찾아보세요!
                </Text>
                <View style={homeStyle.banerImage}></View>
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
            <ScrollView style={homeStyle.list}>
                <FlatList 
                    data={example}
                    renderItem={
                        ({item}) => <Item 
                            name={item.name}
                            content={item.content}
                            user={item.user}
                            distance={item.distance}
                            state={item.state}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 346 }}
                    refreshing={refresh}
                    onRefresh={refreshFunc}
                />
            </ScrollView>
        </View>
    );
}

const homeStyle = StyleSheet.create({
    // baner
    baner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: "#e9aaff",
        height: 123,
        position: "relative"
    },
    banerText: {
        color: "white", 
        margin: 12, 
        zIndex: 1
    },
    banerImage: {
        width: 110, 
        height: "100%", 
        backgroundColor: "blue", 
        position: "absolute", 
        right: 0, 
        bottom: 0, 
        zIndex: -1
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
    // list
    listBox: {
        display: "flex", 
        flexDirection: "row", 
        height: 130,
        borderWidth: 0.2,
        borderColor:"#d9d9d9", 
        padding: 15,
        margin:5, 
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
        height: 18, 
        borderWidth: 0.8, 
        borderStyle: "solid",
        marginLeft: 8,
        marginRight: 8,
    }
});

export default Home;