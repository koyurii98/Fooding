import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, BackHandler, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import ENV_FUNC from '../environment';
const { SERVER_URL } = ENV_FUNC();

import Item from '../component/Item';

function Store(props) {
  
    const [ menuBorder, setMenuBorder ] = useState(0); 

    const [ refresh, setRefresh ] = useState(false);
  
    const [ itemList, setItemmList ] = useState([
      { id: 0, title: "반찬1", image: "", content: "설명 부분입니다. 해당 내용은 반찬1 입니다.", user: "꼬부맘1", state: "판매" },
      { id: 1, title: "반찬2", image: "", content: "설명 부분입니다. 해당 내용은 반찬2 입니다.", user: "꼬부맘2", state: "요청" },
      { id: 2, title: "반찬3", image: "", content: "설명 부분입니다. 해당 내용은 반찬3 입니다.", user: "꼬부맘3", state: "판매" },
      { id: 3, title: "반찬4", image: "", content: "설명 부분입니다. 해당 내용은 반찬4 입니다.", user: "꼬부맘4", state: "요청" },
      { id: 4, title: "반찬5", image: "", content: "설명 부분입니다. 해당 내용은 반찬5 입니다.", user: "꼬부맘5", state: "판매" },
      { id: 5, title: "반찬6", image: "", content: "설명 부분입니다. 해당 내용은 반찬6 입니다.", user: "꼬부맘6", state: "판매" },
      { id: 6, title: "반찬7", image: "", content: "설명 부분입니다. 해당 내용은 반찬7 입니다.", user: "꼬부맘7", state: "요청" },
    ]);

    // 디비에서 가져온 데이터
    const { items, setItems } = props.route.params;
  
    const menu = [
      { num: 0, text: "실시간판매" },
      { num: 1, text: "실시간요청" },
    ];

    useEffect(() => {
      return () => {
        setRefresh(false);
      }
    }, [items]);

    async function refreshFunc() {
      setRefresh(true);

      try {
        const result = await axios.get(`${SERVER_URL}/board/all`);
  
        if(result.data && result.data.data) {
          setItems(result.data.data);
        } else {
          throw "err";
        }
      } catch(err) {
        Alert.alert("실패", "데이터 로드 중 에러가 발생했습니다. 다시 시도해 주세요.", [
          { text: "확인", onPress: () => null, style: "cancel" }
        ]);
      }

      setRefresh(false);
    }
  
    function itemClick(data) {
      props.navigation.navigate("Detail", data);
    }
  
    function menuClick(num) {
      console.log("menu click", num)
      setMenuBorder(num);
    }
  
    return (
      <View style={{height:"100%",backgroundColor:"#ffffff"}}>
         {/* menu */}
         <View style={listStyle.menuBar}>
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
              <SafeAreaView style={listStyle.list}>
                  <FlatList 
                      data={items}
                      renderItem={
                          ({item}) => <Item 
                              id={item.id}
                              title={item.title}
                              content={item.content}
                              image={item.image}
                              user={item.user.name}
                              state={item.state}
                              data={item}
                              itemClick={itemClick}
                          />
                      }
                      keyExtractor={item => item.id.toString()}
                      contentContainerStyle={{ paddingBottom: 50 }}
                      refreshing={refresh}
                      onRefresh={refreshFunc}
                      style={listStyle.listView}
                  />
              </SafeAreaView>
              <TouchableOpacity onPress={() => props.navigation.navigate("Write")} style={listStyle.addBtn}>
                <Image  source={require('../assets/add.png')}/>
              </TouchableOpacity>
      </View>
    );
  }
  
  const listStyle = StyleSheet.create({
  
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
    addBtn:{
      position:"absolute",
      bottom:5,
      right:7,
    }
});
export default Store;