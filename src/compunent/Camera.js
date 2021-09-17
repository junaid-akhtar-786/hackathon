import { Text, TouchableOpacity, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React from 'react';




function Camera (){

const work= () =>{
    var options = {
    title: 'Select Image',
   
 };
 launchCamera(options, response => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      console.log(response);
    }
 });
}


const workImage= () =>{
    var options = {
    title: 'Select Image',
   
 };
 launchImageLibrary(options, response => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      console.log(response);
    }
 });
}




return(
    <View>
        <TouchableOpacity onPress={work}>
            <Text>
                Camera
            </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={workImage}>
            <Text>
                Camera images
            </Text>
        </TouchableOpacity>
    </View>
)


}

export default Camera;