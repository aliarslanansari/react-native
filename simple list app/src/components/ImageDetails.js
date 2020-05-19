import React from "react"
import {View, Text, StyleSheet,Image} from "react-native"

const ImageDetails = ({title,imageScore,imageSource}) =>{
    return <View>
        <Image source={imageSource}/>
        <Text> Image Detail {title} </Text>
        <Text> Image Score - {imageScore} </Text>
    </View>
     
};

const style = StyleSheet.create({

})

export default ImageDetails;