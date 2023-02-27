/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App(): JSX.Element {
  const isDark = useColorScheme() === 'light';
  return (
    <SafeAreaView>
      <ScrollView style={isDark && styles.dark}>
        <FlatCards />
        <ElevatedCard />
        <FancyCards />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#473d3c',
  },
  light: {
    backgroundColor: 'white',
  },
});

export default App;
