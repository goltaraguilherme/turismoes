import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StartPage from './app/';
import StackLayout from './app/_layout';

export default function App() {
  return (
    <View style={styles.container}>
      <StartPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
