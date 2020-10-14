import React , { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, ScrollView, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

import ENV_FUNC from '../../environment';
const { SERVER_URL } = ENV_FUNC();

function ProfileEdit(props) {
    const { info, login, setInfo } = props.route.params;

    const [isMessage, setIsMessage] = useState(false);
    const [isEvent, setIsEvent] = useState(false);
    const [isKeyword, setIsKeyword] = useState(false);

    const messageSwitch = () => setIsMessage(previousState => !previousState);
    const eventSwitch = () => setIsEvent(previousState => !previousState);
    const keywordSwitch = () => setIsKeyword(previousState => !previousState);

    async function locationAuthen() {
        const permission_ = await Location.hasServicesEnabledAsync();

        if(!permission_) {
            Alert.alert("확인", "위치 인증을 허용하여 주세요.", [
                { text: "확인", onPress: () => null, style: "cancel" }
            ]);
            return false;
        }

        try {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert("확인", "위치 인증을 허용하여 주세요.", [
                    { text: "확인", onPress: () => null, style: "cancel" }
                ]);
                return false;
            }

            let location_result = await Location.getCurrentPositionAsync({
                accuracy : 4
            });

            const lng = location_result.coords.longitude;
            const lat = location_result.coords.latitude;

            const location = {
                latitude: lat, 
                longitude: lng
            }

            const result = await Location.reverseGeocodeAsync(location);

            if(!result[0] || !result[0].region || !result[0].street || !result[0].postalCode) {
                Alert.alert("확인", "현재 위치를 확인 할 수 없습니다. 다시 시도해 주세요.", [
                    { text: "확인", onPress: () => null, style: "cancel" }
                ]);
            } else {
                const address = `${result[0].region} ${result[0].street} ${result[0].postalCode}`;
                Alert.alert("확인", `현재 위치로 위치 인증을 하시겠습니까?\n\n${result[0].region} ${result[0].street} ${result[0].postalCode}`, [
                    { text: "확인", onPress: () => locationSave(address), style: "cancel" },
                    { text: "취소", onPress: () => null, style: "cancel" }
                ]);
            }
        } catch(err) {
            Alert.alert("오류", "위치 인증을 할 수 없습니다.", [
                { text: "확인", onPress: () => null, style: "cancel" }
            ]);
        }
    }

    async function locationSave(address) {
        try {
            const result = await axios.put(`${SERVER_URL}/users/update`, {
                id : login.id,
                address
            });

            if(!result.data || !result.data.data) throw 500;

            setInfo(result.data.data);
        } catch(err) {
            Alert.alert("오류", "저장되지 않았습니다. 다시 시도해 주세요.", [
                { text: "확인", onPress: () => null, style: "cancel" }
            ]);
        }
    }

    return (
        <View style={ProfileEditStyle.ProfileEditBox}>
            <ScrollView>
                <View style={ProfileEditStyle.ProfileBox}>
                    <Text style={ProfileEditStyle.ProfileEditTitle}>프로필변경</Text>
                    <TouchableOpacity style={ProfileEditStyle.ProfileImg} onPress={()=>console.log("이미지수정")}>
                        <Image style={{position:"absolute"}} source={require('../../assets/profile.png')} />
                        <View style={ProfileEditStyle.ProfileImgEdit}>
                            <Text style={{textAlign:"center",color:"#ffffff",fontWeight:"700",fontSize:15,}}>이미지수정</Text>
                        </View>
                    </TouchableOpacity>
                    <View width="95%">
                        <View style={ProfileEditStyle.ProfileInfo}>
                            <Text style={ProfileEditStyle.ProfileInfoTitle}>이메일</Text>
                            <Text style={ProfileEditStyle.ProfileInfoText}>{info.email}</Text>
                        </View>
                        <View style={ProfileEditStyle.ProfileInfo}>
                            <Text style={ProfileEditStyle.ProfileInfoTitle}>닉네임</Text>
                            <Text style={ProfileEditStyle.ProfileInfoText}>{info.name}</Text>
                        </View>
                        <View style={{flexDirection:"column"}}>
                            <View style={ProfileEditStyle.ProfileInfo}>
                                <Text style={ProfileEditStyle.ProfileInfoTitle}>주소</Text>
                                <TouchableOpacity style={{width:"65%",justifyContent:"flex-start"}} onPress={locationAuthen}>
                                <Text style={ProfileEditStyle.addressBtn}>{info.address ? "주소 변경" : "위치 인증"}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{width:"100%",marginBottom:10,color:"#5e5e5e",fontSize:16}}>{info.address || "위치 인증이 필요합니다."}</Text>
                            <Text style={{fontSize:13,color:"#ff6767",marginBottom:10}}>다른 사용자에게는 주소가 아닌 km가 표시됩니다.</Text>
                        </View>
                    </View>
                </View>
                <View style={ProfileEditStyle.alertBox}>
                    <Text style={ProfileEditStyle.ProfileEditTitle}>알림설정</Text>
                    <View style={ProfileEditStyle.SwitchBtn}>
                        <Text style={ProfileEditStyle.SwitchTitle}>메세지알림</Text>
                        <Switch
                            trackColor={{ false: "#d1d1d1", true: "#ff6767" }}
                            thumbColor={isMessage ? "#ffffff" : "#f4f3f4"}
                            onValueChange={messageSwitch}
                            value={isMessage}
                        />
                    </View>
                    <View style={ProfileEditStyle.SwitchBtn}>
                        <Text style={ProfileEditStyle.SwitchTitle}>이벤트알림</Text>
                        <Switch
                            trackColor={{ false: "#d1d1d1", true: "#ff6767" }}
                            thumbColor={isEvent ? "#ffffff" : "#f4f3f4"}
                            onValueChange={eventSwitch}
                            value={isEvent}
                        />
                    </View>
                    <View style={ProfileEditStyle.SwitchBtn}>
                        <Text style={ProfileEditStyle.SwitchTitle}>키워드알림</Text>
                        <Switch
                            trackColor={{ false: "#d1d1d1", true: "#ff6767" }}
                            thumbColor={isKeyword ? "#ffffff" : "#f4f3f4"}
                            onValueChange={keywordSwitch}
                            value={isKeyword}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const ProfileEditStyle = StyleSheet.create({
    ProfileEditBox:{
        flex: 1,
        backgroundColor:"#ffffff",
        width:"100%",
        height:"100%",
    },
    ProfileEditTitle:{
        fontWeight:"700",
        color:"#888888",
        fontSize:20,
        width:"100%",
        textAlign:"left",
    },
    ProfileBox:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"#d2d2d2",
        padding:20,
    },
    ProfileImg:{
        width:97,
        height:97,
        margin:15,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    ProfileImgEdit:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        backgroundColor:"#a5a5a585",
        borderRadius:50,
    },
    ProfileInfo:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"70%",
        height:50,
    },
    ProfileInfoTitle:{
        color:"#5e5e5e",
        fontSize:16,
    },
    ProfileInfoText:{
        width:"65%",
        textAlign:"left",
        fontSize:16,
        color:"#5e5e5e",
    },
    ProfileEditInput:{
        height:30,
        fontSize:16,
        color:"#5e5e5e",
        width:"65%",
        borderWidth:1,
        borderColor:"#afafaf",
        padding:7,
        borderRadius:5,
    },
    addressBtn:{
        backgroundColor:"#9a9a9a",
        color:"#ffffff",
        padding:5,
        fontSize:13,
        borderRadius:4,
        width:"50%",
        textAlign:"center"
    },
    alertBox:{
        justifyContent:"center",
        width:"100%",
        alignItems:"center",
        padding:20,
    },
    SwitchTitle:{
        fontSize:16,
        color:"#5e5e5e",
    },
    SwitchBtn:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:50,
        width:"95%"
    }
})
export default ProfileEdit;