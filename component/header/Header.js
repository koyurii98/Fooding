import React from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';

function Header(props) {
    return (
        <View style={headerStyle.headerBox}>
            <Image 
                style={headerStyle.headerLogo}
                source={require("../../assets/Header-Logo.png")}
            />
            <View style={headerStyle.searchBox}>
                <TextInput 
                    style={headerStyle.searchInput}
                    placeholder={"지금 먹고싶은 음식은 무엇인가요?"}
                />
                <Image 
                    style={headerStyle.searchIcon}
                    source={require("../../assets/search.png")}
                />
            </View>
        </View>
    );
}

const headerStyle = StyleSheet.create({
    headerBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerLogo: {
        resizeMode: "contain",
        width: "28%"
    },
    searchBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 37,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#757575",
        borderRadius: 20,
        marginLeft: 15,
        paddingLeft: 8,
        paddingRight: 8
    },
    searchInput: {
        fontSize: 14,
        width: "90%"
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 3,
        resizeMode: "contain",
    }
});

export default Header;