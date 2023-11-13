import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {
  Notification, Receipt21, Clock, Message, HambergerMenu, Profile,
  Location, Scroll, Like, LocationTick
} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { useNavigation } from '@react-navigation/native';

const HorizontalContent = () => {
  const [contentData, setContentData] = useState([
    {
      id: 1,
      title: 'Gunung Ijen',
      location: 'Jawa Timur',
      image: { uri: 'https://i.pinimg.com/736x/75/cb/1b/75cb1b2470fbc81cd3178f8e80f9bd28.jpg' }
    },
    {
      id: 2,
      title: 'Gunung Ijen',
      location: 'Jawa Timur',
      image: { uri: 'https://i.pinimg.com/736x/75/cb/1b/75cb1b2470fbc81cd3178f8e80f9bd28.jpg' }
    },
    {
      id: 3,
      title: 'Gunung Ijen',
      location: 'Jawa Timur',
      image: { uri: 'https://i.pinimg.com/736x/75/cb/1b/75cb1b2470fbc81cd3178f8e80f9bd28.jpg' }
    },
  ]);

  const navigation = useNavigation()

  return (
    <View style={contents.contentBox}>
      <Text style={contents.contentBoxTitle}>Most popular places</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {contentData.map((item, index) => (
          <TouchableOpacity key={index} style={contents.contentBoxCard2} onPress={() => navigation.navigate('ExplorePage')}>
            <ImageBackground
              source={item.image}
              style={contents.cbxImage}
              imageStyle={{ borderRadius: 10 }}
              resizeMode="cover"
            >
              <Like
                color={colors.white()}
                variant="Broken"
                size={35}
                style={{ bottom: 55, left: 95 }}
              />
              <View style={contents.cbxImageInfo}>
                <Text style={contents.cbxImageTitle}>{item.title}</Text>
                <Text style={contents.cbxImageText}>{item.location}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const contents = StyleSheet.create({
  content: {
    marginVertical: 180,
    paddingHorizontal: 25,
    paddingVertical: 25,
    height: 500, // Ini mungkin perlu diganti dengan nilai numerik
    backgroundColor: colors.white(),
    borderRadius: 25,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  contentBox: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: colors.white(),
  },
  contentBoxTitle: {
    fontFamily: fontType['Pps-SemiBold'],
    fontSize: 18,
    color: colors.black(),
  },
  contentBoxCard2: {
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
    width: 250,
    height: 170,
    borderRadius: 15,
    backgroundColor: '#dfe8e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cbxImage: {
    width: 250,
    height: 170,
    paddingTop: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cbxImageInfo: {
    width: '90%',
    height: 60,
    backgroundColor: colors.black(0.50),
    borderRadius: 10,
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cbxImageInfoContent: {
    flex: 1,
  },
  cbxImageTitle: {
    fontFamily: fontType['Pps-Medium'],
    fontSize: 13,
    color: colors.white(0.80),
  },
  cbxImageText: {
    fontFamily: fontType['Pps-Light'],
    fontSize: 13,
    color: colors.white(0.80),
  },
  cbxImageIcon: {
    width: 30,
    height: 30,
    paddingLeft: 70,
    backgroundColor: colors.black(0.50),
  },
  bxc3Image: {
    width: 80,
    height: 80,
    marginLeft: 24,
    marginVertical: 10,
    borderRadius: 10
  },
  contentBoxRightContent: {
    marginVertical: 40,
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  contentBoxBottomContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  bxc3Title: {
    fontFamily: fontType['Pps-Bold'],
    fontSize: 15,
    lineHeight: 20,
    color: '#9bc9c5',
  },
  bxc3Text: {
    fontFamily: fontType['Pps-SemiBold'],
    fontSize: 13,
    color: colors.white(0.95),
  },
});

export default HorizontalContent;
