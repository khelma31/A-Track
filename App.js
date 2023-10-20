/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {
  Notification, Receipt21, Clock, Message, HambergerMenu, Profile,
  Location, Scroll, Like, LocationTick
} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <ImageBackground
      source={require('./src/assets/background/6.jpg')}
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
            <View style={contents.contentBox}>
              <Text style={contents.contentBoxTitle}>
                Categories
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={contents.contentBoxCard}>
                  <Text style={contents.cbxText}>Recommended</Text>
                </View>
                <View style={contents.contentBoxCard}>
                  <Text style={contents.cbxText}>Mountain</Text>
                </View>
                <View style={contents.contentBoxCard}>
                  <Text style={contents.cbxText}>Hill</Text>
                </View>
              </ScrollView>
            </View>
            <View style={contents.contentBox}>
              <Text style={contents.contentBoxTitle}>
                Most popular places
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={contents.contentBoxCard2}>
                  <ImageBackground
                    source={require('./src/assets/image/1.jpg')}
                    style={contents.cbxImage}
                    imageStyle={{ borderRadius: 10 }}
                    resizeMode="cover">
                    <Like color={colors.white()} variant="Broken" size={35} style={{ bottom: 55, left: 95 }} />
                    <View style={contents.cbxImageInfo}>
                      <Text style={contents.cbxImageTitle}>Gunung Semeru</Text>
                      <Text style={contents.cbxImageText}>Jawa Timur</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={contents.contentBoxCard2}>
                  <ImageBackground
                    source={require('./src/assets/image/2.jpg')}
                    style={contents.cbxImage}
                    imageStyle={{ borderRadius: 10 }}
                    resizeMode="cover">
                    <Like color={colors.white()} variant="Broken" size={35} style={{ bottom: 55, left: 95 }} />
                    <View style={contents.cbxImageInfo}>
                      <Text style={contents.cbxImageTitle}>Gunung Kerinci</Text>
                      <Text style={contents.cbxImageText}>Sumatera Barat</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={contents.contentBoxCard2}>
                  <ImageBackground
                    source={require('./src/assets/image/campuhan.jpg')}
                    style={contents.cbxImage}
                    imageStyle={{ borderRadius: 10 }}
                    resizeMode="cover">
                    <Like color={colors.white()} variant="Broken" size={35} style={{ bottom: 55, left: 95 }} />
                    <View style={contents.cbxImageInfo}>
                      <Text style={contents.cbxImageTitle}>Bukit Campuhan</Text>
                      <Text style={contents.cbxImageText}>Bali</Text>
                    </View>
                  </ImageBackground>
                </View>
              </ScrollView>
            </View>
            <View style={contents.contentBox}>
              <Text style={contents.contentBoxTitle}>
                My schedule
              </Text>
              <View style={contents.contentBoxCard3}>
                <Image
                  source={require('./src/assets/image/1.jpg')}
                  style={contents.bxc3Image}>
                </Image>
                <View style={contents.contentBoxRightContent}>
                  <Text style={contents.bxc3Title}>Gunung Semeru</Text>
                  <View style={contents.contentBoxBottomContent}>
                    <Text style={contents.bxc3Text}>10 June, 2023</Text>
                  </View>
                </View>
                <LocationTick color={colors.white()} variant="Broken" size={35} style={{right: 30}}/>
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
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: colors.white(0.50),
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  backgroundImage: {
    width: '100%',
    height: '70%'
  },
  title: {
    marginLeft: 24,
    marginTop: '20%',
    fontFamily: fontType['Pps-SemiBold'],
    fontSize: 37,
    color: colors.grey(),
  },
  subTitle: {
    marginLeft: 24,
    bottom: 10,
    fontFamily: fontType['Pps-Regular'],
    fontSize: 24,
    color: colors.grey(),
  },
});

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
  contentScroll: {
    paddingHorizontal: 5, // Ini mungkin perlu diganti dengan nilai numerik
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
});
