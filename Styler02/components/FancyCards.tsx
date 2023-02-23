import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.jaipur.org.uk/images/hawa-mahal-jaipur.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            enim voluptatem hic odio nihil voluptatibus aperiam.
          </Text>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#000',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {
    color: '#000',
  },
});

export default FancyCards;
