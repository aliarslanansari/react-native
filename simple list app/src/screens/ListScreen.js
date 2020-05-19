import React from "react";
import { Text, StyleSheet,FlatList } from "react-native";
const ListScreen = () => {
    const friends = [
        {name : 'Friend #1', age:21},
        {name : 'Friend #2', age:22},
        {name : 'Friend #3', age:23},
        {name : 'Friend #4', age:12},
        {name : 'Friend #5', age:30},
        {name : 'Friend #6', age:40},
        {name : 'Friend #7', age:2}
    ];
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={friend=>friend.name}
        data={friends}
        renderItem={({item})=>{
        return <Text style={styles.textStyle}> {item.name} - Age:{item.age} </Text>
        }} 
        />
    )
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});
export default ListScreen;