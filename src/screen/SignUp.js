import database from '@react-native-firebase/database';
import React ,{ useState }from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView

} from 'react-native';

import Logo from '../images/logo.png'
import auth from '@react-native-firebase/auth';


function SignUP({ navigation }) {
    const [user,setUser] =useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const register =()=>{
        const userData ={
            user
        }
        auth()
  .createUserWithEmailAndPassword(email ,password)
  .then(() => {
  database().ref('/users/').push(userData);
      navigation.navigate('home')
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Image style={styles.logo} source={Logo}></Image>
                </View>
                <View>
                    <Text style={styles.hedng}>
                        SignUp
                    </Text>
                </View>

                <View style={{ marginTop: 20, marginHorizontal: 30 ,borderColor : 'grey' }} >
                    <TextInput placeholder="Username" onChangeText={(text)=>setUser(text)} keyboardAppearance='dark' style={[styles.input]}></TextInput>
                </View>

                
                <View style={{ marginTop: 20, marginHorizontal: 30,borderColor : 'grey' }} >
                    <TextInput placeholder="Email" onChangeText={(text)=>setEmail(text)} keyboardAppearance='dark' style={[styles.input]}></TextInput>
                </View>


        
                <View style={{ marginTop: 20, marginHorizontal: 30, borderColor : 'grey'}} >
                    <TextInput placeholder='Password' onChangeText={(text)=>setPassword(text)} keyboardAppearance='dark' secureTextEntry={true} style={[styles.input]}></TextInput>
                </View>

                <View style={{borderColor:'black' ,borderWidth:2, marginTop: 20,marginBottom:20, marginHorizontal: 30, justifyContent: 'center', backgroundColor: "#E6E6E6", alignItems: 'center', borderRadius: 100 }} >
                    <TouchableOpacity onPress={register} >
                        <Text  style={{ fontSize: 24, padding: 10, margin: 'auto' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>
                {/* <View style={{ marginTop: 20, marginHorizontal: 30, justifyContent: 'center', backgroundColor: "#BD6669", alignItems: 'center', borderRadius: 100 }} >
                    <TouchableOpacity >
                        <Text style={{ fontSize: 24, padding: 10, margin: 'auto' }}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View> */}

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
        width: 220,
        height: 130,
    },
    input: {
        borderWidth: 2,
        alignItems: 'center',
        borderRadius: 100,
        fontSize: 24,
        paddingHorizontal: 20




    },
    hedng: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',


    }
})
export default SignUP;