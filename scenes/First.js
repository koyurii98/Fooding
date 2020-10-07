import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/Loading-Logo.png';

function First(props) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Tab");
        }, 500);
    }, []);

    return (
        <View style={styles.LodingBox} >
            <Image style={styles.LoadingLogo} source={Logo} />
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