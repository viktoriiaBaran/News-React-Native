import { gstyle } from "./styles/style";
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import React, {useState} from "react";

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
        <View style={gstyle.main}>
          <Text style={gstyle.title}>Hello</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});
