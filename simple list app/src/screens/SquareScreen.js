import React,{useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import ColorCounter from "./../components/ColorCounter"

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -15;



const SquareScreen = ()=>{
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);

    const setColor = (color, change)=>{
        if(color === 'red'){
            if(red+change>255||red+change<0){
                return
            }else{
                setRed(red+change)
            }
        }
    }

    console.log(red,blue,green)
    return <View>
        <ColorCounter 
        onIncrease={()=>setColor('red',COLOR_INCREMENT)}
        onDecrease={()=>setColor('red',COLOR_DECREMENT)}
        color="Red"/>
        <ColorCounter 
        onIncrease={()=>setBlue(blue+COLOR_INCREMENT)}
        onDecrease={()=>setBlue(blue-COLOR_DECREMENT)}
        color="Blue"/>
        <ColorCounter 
        onIncrease={()=>setGreen(green+COLOR_INCREMENT)}
        onDecrease={()=>setGreen(green-COLOR_DECREMENT)}
        color="Green"/>
        <View style={{height:150,width:150,backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></View>
        <Text style={{textAlign:"center"}}>{red}, {green}, {blue}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default SquareScreen;