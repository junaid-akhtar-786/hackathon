import { Text, TouchableOpacity, View, StyleSheet, Image, ImageBackground } from "react-native";
import React from 'react';
import Logo from '../images/logo.png'
import BckgrdImg from '../images/images.jpg'


function Home({ navigation }) {
    return (
        <View >
            <ImageBackground style={{ width: '100%', height: 720 }} source={BckgrdImg}>
                <View style={styles.container}>
                    <Image source={Logo}></Image>
                </View>
                <View style={{ width: '100%' }}>
                    <View style={{ justifyContent: 'center', margin: "auto", alignItems: 'center', marginTop: 200 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Quiz') }} style={{ justifyContent: 'center', borderRadius: 200, width: '50%', height: 50, backgroundColor: "#BD6669", alignItems: 'center' }}>
                            <Text style={{ fontSize: 24 }}>
                                Start
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )


};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        marginTop: 70
    },
    logo: {
        width: 300,
        height: 150,
    }
})

export default Home;