import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>Sanu</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
          <Text>Dipa</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#CAD5E2',
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
  },
  cardElevator: {
    backgroundColor: 'yellow',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'purple',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
