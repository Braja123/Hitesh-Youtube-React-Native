import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headiangText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}></Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yRvrrx0AfWO66FPXMZHHVaoYyu-YcFkM6E773n0&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            corrupti, modi tenetur, quaerat veritatis harum repellendus, dolores
            minus voluptate voluptates saepe sint velit maxime mollitia
            quibusdam? Placeat, a cum. Ex?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headiangText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLinks: {},
});
