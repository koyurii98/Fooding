import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, Switch, ScrollView } from 'react-native';

function ProfileEdit(props) {
    const [isMessage, setIsMessage] = useState(false);
    const [isEvent, setIsEvent] = useState(false);
    const [isKeyword, setIsKeyword] = useState(false);

    const messageSwitch = () => setIsMessage(previousState => !previousState);
    const eventSwitch = () => setIsEvent(previousState => !previousState);
    const keywordSwitch = () => setIsKeyword(previousState => !previousState);
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
                            <Text style={ProfileEditStyle.ProfileInfoText}>abc@abc.com</Text>
                        </View>
                        <View style={ProfileEditStyle.ProfileInfo}>
                            <Text style={ProfileEditStyle.ProfileInfoTitle}>닉네임</Text>
                            <TextInput style={ProfileEditStyle.ProfileEditInput}/>
                        </View>
                        <View style={{flexDirection:"column"}}>
                            <View style={ProfileEditStyle.ProfileInfo}>
                                <Text style={ProfileEditStyle.ProfileInfoTitle}>주소</Text>
                                <TouchableOpacity style={{width:"65%",justifyContent:"flex-start"}} onPress={()=>console.log("주소변경")}>
                                    <Text style={ProfileEditStyle.addressBtn}>주소변경</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{width:"100%",marginBottom:10,color:"#5e5e5e",fontSize:16}}>서울특별시 관악구 가나다동 123-23</Text>
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