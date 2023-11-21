import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home';
import { ChatPref } from './src/screens/ChatPref';
import { ChatCompa } from './src/screens/ChatComp';
import { ChatD } from './src/screens/ChatDias';
import { Fav } from './src/screens/fav';
import { MyItin } from './src/screens/MyItineraries';
import { SeeMyItin } from './src/screens/SeeMyItin';

export default function App() {
  return (
    <View style={styles.container}>
      <SeeMyItin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
