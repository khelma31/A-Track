import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import {
    Notification, Receipt21, Clock, Message, HambergerMenu, Profile,
    Location, Scroll, Like, LocationTick, ArrowLeft, Star1, SearchNormal, Filter
} from 'iconsax-react-native';
import { fontType, colors } from '../../../src/theme';
import { useNavigation } from '@react-navigation/native';
import ExplorePage from '../Explore';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const DiscoverPage = () => {

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
        {
            id: 4,
            title: 'Gunung Ijen',
            location: 'Jawa Timur',
            image: { uri: 'https://i.pinimg.com/736x/75/cb/1b/75cb1b2470fbc81cd3178f8e80f9bd28.jpg' }
        },
        {
            id: 5,
            title: 'Gunung Ijen',
            location: 'Jawa Timur',
            image: { uri: 'https://i.pinimg.com/736x/75/cb/1b/75cb1b2470fbc81cd3178f8e80f9bd28.jpg' }
        },
        {
            id: 6,
            title: 'Gunung Ijen',
            location: 'Jawa Timur',
            image: { uri: 'https://i.pinimg.com/736x/75/cb/1b/75cb1b2470fbc81cd3178f8e80f9bd28.jpg' }
        },
    ]);

    const navigation = useNavigation()
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 142);
    const recentY = diffClampY.interpolate({
        inputRange: [0, 142],
        outputRange: [0, -64],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { transform: [{ translateY: recentY }] }]}>
                <TouchableWithoutFeedback style={styles.search} onPress={() => navigation.navigate("SearchPage")}>
                    <SearchNormal color={colors.black(0.5)} variant="Linear" size={20} style={{ marginRight: 10 }} />
                    <Text style={styles.searchText}>Discover</Text>
                </TouchableWithoutFeedback>
                <View style={styles.filter}>
                    <TouchableOpacity>
                        <Filter color={colors.black(0.5)} variant="Linear" size={20} />
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <View style={list.containerList}>
                <Animated.View style={[list.cardContainer, { transform: [{ translateY: recentY }] }]}>
                    <Animated.ScrollView
                        showsVerticalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: true },
                        )}>
                        {contentData.map((item, index) => (
                            <TouchableOpacity key={index} style={contents.contentBoxCard2} onPress={() => navigation.navigate(ExplorePage)}>
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
                                        style={{ bottom: 55, left: 145 }}
                                    />
                                    <View style={contents.cbxImageInfo}>
                                        <Text style={contents.cbxImageTitle}>{item.title}</Text>
                                        <Text style={contents.cbxImageText}>{item.location}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </Animated.ScrollView>
                </Animated.View>
            </View>

        </View>
    )
};

export default DiscoverPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        backgroundColor: colors.white(0.50),
    },
    search: {
        width: 290,
        height: 45,
        backgroundColor: colors.black(0.1),
        borderRadius: 20,
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    searchText: {
        fontFamily: fontType['Pps-Regular'],
        fontSize: 13,
        color: colors.black(0.5),
        lineHeight: 25
    },
    filter: {
        width: 45,
        height: 45,
        backgroundColor: colors.black(0.1),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCategories: {
        paddingHorizontal: 20
    },
})

const list = StyleSheet.create({
    containerList: {
        flex: 1,
    },
    cardContainer: {
        flexDirection: 'column',
        marginBottom: -50,
    },
    cardBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginHorizontal: 10,
        width: 50,
        height: 50,
        backgroundColor: colors.black(0.5)
    }
})

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
    contentBoxTitle: {
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 18,
        color: colors.black(),
    },
    contentBoxCard2: {
        marginVertical: 5,
        marginHorizontal: 20,
        width: 352,
        height: 170,
        borderRadius: 15,
        backgroundColor: '#dfe8e7',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cbxImage: {
        width: 352,
        height: 170,
        paddingTop: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cbxImageInfo: {
        width: 325,
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
})