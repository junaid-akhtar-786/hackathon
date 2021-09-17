
import React from 'react'
import AppNavigation from './src/navigations/StackNavigation';
import { Provider } from "react-redux";
import store from "./src/store";
import 'react-native-gesture-handler';
import FacebookSignIn from './src/config/fb.js';




function App() {
  return (

    // <Provider store={store}>
    //  <AppNavigation/>
    // </Provider>
<FacebookSignIn/>
  )

}
export default App;
