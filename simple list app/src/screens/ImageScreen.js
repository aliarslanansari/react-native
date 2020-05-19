import React from "react"
import {View, Text, StyleSheet} from "react-native"
import ImageDetail from "../components/ImageDetails"

const ImageScreen = () =>{
    return <View>
            <ImageDetail title='Forest' imageSource={require('./../../assets/beach.jpg')} imageScore="10"/>
            <ImageDetail title='Sea' imageSource={require('./../../assets/forest.jpg')} imageScore="10"/>
            <ImageDetail title='Mountain' imageSource={require('./../../assets/mountain.jpg')} imageScore="10"/>
            <ImageDetail title='Forest' imageSource={require('./../../assets/beach.jpg')} imageScore="10"/>
            <ImageDetail title='Sea' imageSource={require('./../../assets/forest.jpg')} imageScore="10"/>
            <ImageDetail title='Mountain' imageSource={require('./../../assets/mountain.jpg')} imageScore="10"/>
            <ImageDetail title='Forest' imageSource={require('./../../assets/beach.jpg')} imageScore="10"/>
            <ImageDetail title='Sea' imageSource={require('./../../assets/forest.jpg')} imageScore="10"/>
            <ImageDetail title='Mountain' imageSource={require('./../../assets/mountain.jpg')} imageScore="10"/>
        </View>
};

const style = StyleSheet.create({

})

export default ImageScreen;