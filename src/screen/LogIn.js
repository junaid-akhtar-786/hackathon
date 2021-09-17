import React, { useState } from 'react';
import {

    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView

} from 'react-native';
import auth from '@react-native-firebase/auth';
import Logo from '../images/logo.png'
import Icon from 'react-native-vector-icons/AntDesign';
import Camera from '../compunent/Camera';

function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const logIn = () => {

        console.log(email,password);
        return auth().signInWithEmailAndPassword(email, password).then(() => {
            navigation.navigate('home')
            console.log(navigation);
            
          console.log('User account created & signed in!');
        }).catch((e) => alert('Something went wrong'))
        
    }
    return (
        <ScrollView>
            <View>
                <Camera />
                <View style={styles.container}>
                    <Image style={styles.logo} source={Logo}></Image>
                </View>
                <View>
                    <Text style={styles.hedng}>
                        Login
                    </Text>
                </View>

                <View style={{ marginTop: 20, marginHorizontal: 30, borderColor: 'grey' }} >
                    <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} keyboardAppearance='dark' style={[styles.input]}></TextInput>
                </View>


                <View style={{ marginTop: 20, marginHorizontal: 30, borderColor: 'grey' }} >
                    <TextInput placeholder='Password' onChangeText={(text) => setPassword(text)} keyboardAppearance='dark' secureTextEntry={true} style={[styles.input]}></TextInput>
                </View>

                <View style={{ marginTop: 20, marginHorizontal: 30, justifyContent: 'center', backgroundColor: "#BD6669", alignItems: 'center', borderRadius: 100 }} >
                    <TouchableOpacity onPress={logIn}>
                        <Text style={{ fontSize: 24, padding: 10, margin: 'auto' }}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20, borderColor: 'black', borderWidth: 2, marginHorizontal: 30, justifyContent: 'center', backgroundColor: "#E6E6E6", alignItems: 'center', borderRadius: 100 }} >
                    <TouchableOpacity onPress={() => {navigation.navigate('SignUP') }}>
                        <Text style={{ fontSize: 24, padding: 10, margin: 'auto' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
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
    },
    input: {
        borderWidth: 2,
        alignItems: 'center',
        borderRadius: 100,
        fontSize: 24,
        borderColor: 'grey',
        paddingHorizontal: 20




    },
    hedng: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',


    }
})
export default Login;