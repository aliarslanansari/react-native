import React,{useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";

const ColorCounter = ({color,onIncrease,onDecrease})=>{
    const [colors,setColors] = useState([]);
    return <View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`} onPress={()=>onIncrease()}/>
        <Button title={`Decrease ${color}`} onPress={()=>onDecrease()}/>
    </View>
}
const styles = StyleSheet.create({

});

export default ColorCounter;