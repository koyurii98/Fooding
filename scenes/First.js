import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useIsFocused  } from '@react-navigation/native'
import axios from 'axios';

function First(props) {
    const isFocused = useIsFocused()

    useEffect(() => {
        // first server data request .. and navigate code ..
        
        setTimeout(() => {
            props.navigation.navigate("Tab");
        }, 500);
    }, [isFocused]);

    return (
        <View style={styles.LodingBox} >
            <Image style={styles.LoadingLogo} source={require("../assets/Loading-Logo.png")} />
            <Text>v 0.0.1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
LodingBox:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
},
LoadingLogo:{
    resizeMode:"contain",
},
});

export default First;