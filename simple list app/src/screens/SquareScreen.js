import React,{useReducer} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import ColorCounter from "./../components/ColorCounter"

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -15;

const reducer = (state, action)=>{
    switch(action.type){
        case 'change_red':
            return (state.red+action.payload>255||state.red+action.payload<0)? state: {...state, red: state.red+action.payload};
        case 'change_green':
            return (state.green+action.payload>255||state.green+action.payload<0)? state: {...state, green: state.green+action.payload};
        case 'change_blue':
            return (state.blue+action.payload>255||state.blue+action.payload<0)? state: {...state, blue: state.blue+action.payload};
        default:
            return state;
    }
}
const SquareScreen = ()=>{

    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red, green, blue} = state;
 
    // const [red,setRed] = useState(0);
    // const [blue,setBlue] = useState(0);
    // const [green,setGreen] = useState(0);
    // const setColor = (color, change)=>{
    //     switch(color){
    //         case "red":
    //             (red+change>255||red+change<0)? null:setRed(red+change);
    //             return;
    //         case "blue":
    //             (blue+change>255||blue+change<0)? null:setBlue(blue+change);
    //             return;
    //         case "green":
    //             (green+change>255||green+change<0)? null:setGreen(green+change);
    //             return;
    //     }
    // 

    // console.log(red,green,blue)
    return <View>
        <ColorCounter 
        onIncrease={()=>dispatch({type:'change_red', payload:COLOR_INCREMENT})}
        onDecrease={()=>dispatch({type:'change_red', payload:COLOR_DECREMENT})}
        color="Red"/>
        <ColorCounter 
        onIncrease={()=>dispatch({type:'change_green', payload:COLOR_INCREMENT})}
        onDecrease={()=>dispatch({type:'change_green', payload:COLOR_DECREMENT})}
        color="Green"/>
        <ColorCounter 
        onIncrease={()=>dispatch({type:'change_blue', payload:COLOR_INCREMENT})}
        onDecrease={()=>dispatch({type:'change_blue', payload:COLOR_DECREMENT})}
        color="Blue"/>
        <View style={{height:150,width:150,backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></View>
        <Text style={{textAlign:"center"}}>{red}, {green}, {blue}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default SquareScreen;