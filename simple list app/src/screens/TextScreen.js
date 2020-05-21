import React,{useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";
const TextScreen = ()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState("");
    return (
        <View>
            <Text>Enter Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                autoCapitalize="words"
                placeholder='Enter some text'
                onChangeText={(newValue)=>{
                    setName(newValue)
                }}
                value={name}
            />
            
            <Text>Enter Password</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                autoCapitalize="words"
                passwordRules
                placeholder='Enter some text'
                onChangeText={(newValue)=>{
                    setPassword(newValue)
                }}
                value={password}
            />
            {(password.length<5)?<Text style={{marginLeft:16, color:'red', fontSize:12}}>Password must be atleast 5 character long</Text>:null}
            <Text>{name}</Text>
            <Text>{password}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    input:{
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'black',
        paddingLeft:5
    }
});
export default TextScreen;