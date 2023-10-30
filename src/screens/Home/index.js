import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {
  Notification, Receipt21, Clock, Message, HambergerMenu, Profile,
  Location, Scroll, Like, LocationTick, ArrowLeft
} from 'iconsax-react-native';
import HorizontalContent from '../../../HorizontalContent';
import { fontType, colors } from '../../../src/theme';

const HomePage = () => {

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/73/e4/de/73e4de82df0aae7272cfb3056e3d788a.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <HambergerMenu color={colors.black()} variant="Broken" size={28} />
          <Profile color={colors.black()} variant="Broken" size={28} />
        </View>
      </View>
      <Text style={styles.title}>Hi Mikhael!</Text>
      <Text style={styles.subTitle}>Let's Explore The World</Text>
      <View style={contents.content}>
        <View style={contents.contentScroll}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CategoryList categories={['Recommended', 'Mountain', 'Hill']} />
            <HorizontalContent />
            <View style={contents.contentBox}>
              <Text style={contents.contentBoxTitle}>
                My schedule
              </Text>
              <View style={contents.contentBoxCard3}>
                <Image
                  source={{ uri: 'https://asset.kompas.com/crops/OD9itl1d8QHvxgLLaKN3u13KhYw=/1x0:1000x666/750x500/data/photo/2023/02/28/63fdb9789cf09.jpg' }}
                  style={contents.bxc3Image}>
                </Image>
                <View style={contents.contentBoxRightContent}>
                  <Text style={contents.bxc3Title}>Gunung Bromo</Text>
                  <View style={contents.contentBoxBottomContent}>
                    <Text style={contents.bxc3Text}>10 June, 2023</Text>
                  </View>
                </View>
                <LocationTick color={colors.white()} variant="Broken" size={35} style={{ right: 30 }} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: colors.white(0.50),
    paddingTop: 8,
    paddingBottom: 4,
  },
  backgroundImage: {
    width: '100%',
    height: '70%'
  },
  title: {
    marginLeft: 20,
    marginTop: '20%',
    fontFamily: fontType['Pps-SemiBold'],
    fontSize: 37,
    color: colors.grey(),
  },
  subTitle: {
    marginLeft: 20,
    bottom: 10,
    fontFamily: fontType['Pps-Regular'],
    fontSize: 24,
    color: colors.grey(),
  },
});

const CategoryList = (props) => {
  const { categories } = props;

  return (
    <View style={contents.contentBox}>
      <Text style={contents.contentBoxTitle}>
        Categories
      </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <View key={index} style={contents.contentBoxCard}>
              <Text
                style={contents.cbxText}
                onPress={() => handleCategoryPress(category)}
              >
                {category}
              </Text>
            </View>
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
    height: 500,
    backgroundColor: colors.white(),
    borderRadius: 25,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  contentScroll: {
    paddingHorizontal: 5,
    backgroundColor: colors.white(),
    height: 390,
    borderRadius: 25,
    justifyContent: 'center',
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
  contentBoxCard: {
    marginTop: 5,
    marginBottom: 20,
    marginRight: 10,
    width: 125,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#dfe8e7',
    alignItems: 'center',
    justifyContent: 'center',
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
  contentBoxCard3: {
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
    width: '100%',
    height: 120,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#759693',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cbxText: {
    fontFamily: fontType['Pps-SemiBold'],
    fontSize: 13,
    color: colors.grey(),
  },
  cbxImage: {
    width: 250,
    height: 170,
    paddingTop: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cbxImage2: {
    width: '100%',
    height: 150,
    paddingTop: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cbxIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
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
})

export default HomePage;