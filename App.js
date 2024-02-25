import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/Navigation';
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import store from './app/state/store';


export default function App() {
  console.log('App.js');

  const [fontsLoaded, error] = useFonts({
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
  });
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

