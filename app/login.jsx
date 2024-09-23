import { useNavigation } from 'expo-router';
import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native';
import { Dimensions, StyleSheet } from 'react-native'
import { Text, TextInput, View } from 'react-native-web'


const { height, width } = Dimensions.get('window');
const login = () => {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Text style={style.login}>Login</Text>
            <Text style={style.greet}>Welcome back! Login to access your account🤩</Text>
            <Text style={style.lable}>Email Address</Text>
            <TextInput placeholder='' style={style.input} />
            <Text style={style.lable}>Password</Text>
            <TextInput placeholder='' style={style.input} secureTextEntry={true} />
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={style.skip}>Forgot Password</Text>
            </TouchableOpacity>
            <Pressable style={style.btn}><Text style={style.btnText}>Login</Text></Pressable>

            <Text style={style.register}>Don't have an account?
                <Pressable onPress={()=>navigation.navigate('register')}>
                    <Text style={style.gold}>Register</Text>
                </Pressable>
          </Text>

        </View>

    )
}

export default login

const style = StyleSheet.create({
    container: {
        backgroundColor: "#1E1E1E",
        height: height,
        position: "relative",
        padding: 20
    },
    login: {
        textAlign: "center",
        color: "white",
        fontSize: 30
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize:20
    },
    greet: {
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: 20,
        marginBottom: 100
    },
    gold: {
        color: "#F5C249",
        marginLeft:5
    },
    lable: {
        color: "white",
        marginBottom: 10,
    },
    input: {
        borderRadius: 5,
        paddingHorizontal: 10,
        flex: 1,
        maxHeight: 50,
        marginBottom: 20,
        borderColor: "white",
        borderWidth: "1px",
        color: "white"

    },
    skip: {
        textAlign: "right",
        color: "#F5C249",
        fontSize: 15
    },
    btn:{
        flex:1,
        maxHeight:50,
        borderRadius:30,
        color:"white",
        backgroundColor: "#F5C249",
        marginTop:30,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    register:{
        textAlign:"center",
        marginTop:30,
        color:"white"
    }

})