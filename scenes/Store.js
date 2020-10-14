import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, BackHandler, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import ENV_FUNC from '../environment';
const { SERVER_URL } = ENV_FUNC();

import Item from '../component/Item';

function Store(props) {
  
    const [ menuBorder, setMenuBorder ] = useState(0); 

    const [ refresh, setRefresh ] = useState(false);
  

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
      setMenuBorder(num);
    }
  
    function writeHandle(){
      if(props.route.params.login.email){
        props.navigation.navigate("Write");
        return;
      }
      Alert.alert("확인", "로그인 후 이용해주세요.", [
        { text: "로그인 하러가기", onPress: () => props.navigation.navigate("Login"), style: "cancel" },
        { text: "취소", onPress: () => null, style: "cancel" }
      ]);
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
                          ({item}) => {
                            if(item.state==="판매" && menuBorder===0){
                              console.log("a")
                              return <Item 
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                image={item.image}
                                user={item.user.name}
                                state={item.state}
                                price={item.price}
                                cate={item.category}
                                data={item}
                                itemClick={itemClick}
                            />
                            } else if(item.state === "요청" && menuBorder === 1) {
                              return <Item 
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                image={item.image}
                                user={item.user.name}
                                state={item.state}
                                price={item.price}
                                cate={item.category}
                                data={item}
                                itemClick={itemClick}
                            />
                            }
                          }
                      }
                      keyExtractor={item => item.id.toString()}
                      contentContainerStyle={{ paddingBottom: 50 }}
                      refreshing={refresh}
                      onRefresh={refreshFunc}
                      style={listStyle.listView}
                  />
              </SafeAreaView>
              <TouchableOpacity onPress={writeHandle} style={listStyle.addBtn}>
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