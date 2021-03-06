import React from "react";
import { TouchableOpacity,View,Button,Text, StyleSheet } from "react-native";


const HomeScreen = ({navigation}) => {
  // console.log(props)
  return <View>
          <Text style={styles.text}>HomeScreen</Text>
          <Button 
          onPress={()=>{console.log('Button Pressed')}}
          title="Go to List Screen" />
          <Button 
          onPress={()=>{navigation.navigate('Image')}}
          title="Go to Image Screen" />
          <Button 
          onPress={()=>{navigation.navigate('Counter')}}
          title="Go to Counter Screen" />
          <Button 
          onPress={()=>{navigation.navigate('Color')}}
          title="Go to Color Screen" />
          <Button 
          onPress={()=>{navigation.navigate('Square')}}
          title="Go to Square Screen" />
          <Button 
          onPress={()=>{navigation.navigate('Text')}}
          title="Go to Text Screen" />
          
          <TouchableOpacity onPress={()=>{navigation.navigate('List')}} >
            <Text>Go to List Demo</Text>
          </TouchableOpacity>
        </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
