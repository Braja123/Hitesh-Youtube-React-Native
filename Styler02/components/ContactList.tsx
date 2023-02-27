import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uuid: 1,
      name: 'Gopal Das',
      email: 'gopal@gmail.com',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
    },
    {
      uuid: 2,
      name: 'Sanu Das',
      email: 'sanu@gmail.com',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png',
    },
    {
      uuid: 3,
      name: 'Dipa Das',
      email: 'dipa@gmail.com',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png',
    },
    {
      uuid: 4,
      name: 'Subha Das',
      email: 'subha@gmail.com',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_960_720.jpg',
    },
    {
      uuid: 5,
      name: 'Dj Das',
      email: 'dj@gmail.com',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
    },
  ];
  return (
    <View>
      <Text style={styles.headiangText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uuid, name, email, imageUrl}) => (
          <View key={uuid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headiangText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#CAD5E2',
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
    color: '#CAD5E2',
  },
});

export default ContactList;
