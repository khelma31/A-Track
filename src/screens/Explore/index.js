import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {
    Notification, Receipt21, Clock, Message, HambergerMenu, Profile,
    Location, Scroll, Like, LocationTick, ArrowLeft, Star1
} from 'iconsax-react-native';
import { fontType, colors } from '../../../src/theme';
import { useNavigation } from '@react-navigation/native';

const ExplorePage = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ padding: 4, }} onPress={() => navigation.navigate('DiscoverPage')}>
                    <ArrowLeft color={colors.black()} variant="Linear" size={30} />
                </TouchableOpacity>
            </View>
            <BackgroundContent />
            <MainContent />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 8,
        paddingBottom: 4,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        backgroundColor: colors.white(0.50),
    },

})

const BackgroundContent = () => {
    return (
        <View style={Picture.boxPic}>
            <ImageBackground
                source={{ uri: 'https://asset.kompas.com/crops/7-0zX9IZsHSzcZZz3bMTdMZq-oE=/0x0:1200x800/750x500/data/photo/2021/08/19/611e162fed8b4.jpg' }}
                style={Picture.pic}
                imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
                resizeMode="cover">
                <View style={[Picture.boxTitle, { position: 'absolute', bottom: 0, left: 0 }]}>
                    <Text style={Picture.title}>Gunung Ijen</Text>
                    <Text style={Picture.subTitle}>Jawa Timur, Indonesia</Text>
                </View>
                <View style={[Picture.boxReview, { position: 'absolute', bottom: 0, left: 265 }]}>
                    <Star1 color={'#E7B125'} variant="Bold" size={25} style={[{ alignSelf: 'center' }]} />
                    <Text style={Picture.reviewNumber}> 5,0</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const Picture = StyleSheet.create({
    boxPic: {
        width: '100%',
        height: 320,
    },
    pic: {
        width: '100%',
        height: 320,
    },
    boxTitle: {
        width: 250,
        height: 70,
        backgroundColor: colors.white(),
        alignSelf: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    boxReview: {
        width: 95,
        height: 70,
        backgroundColor: '#2bbaae',
        alignSelf: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        marginTop: 5,
        lineHeight: 21,
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 18,
        color: colors.black(),
    },
    subTitle: {
        fontFamily: fontType['Pps-Regular'],
        fontSize: 12,
        color: colors.black(),
    },
    reviewNumber: {
        top: 3,
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 18,
        color: colors.white(),
    }

})

const MainContent = () => {
    return (
        <View style={content.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={content.boxContent}>
                    <Text style={content.title}>Description</Text>
                    <View style={content.boxDescription}>
                        <Text style={content.textDescription}>Gunung Ijen di Jawa Timur, Indonesia, terkenal dengan pemandangan kawah vulkaniknya
                            yang mengeluarkan api biru, menciptakan pengalaman alam yang unik dan indah.</Text>
                    </View>
                    <Text style={content.title}>Photos</Text>
                    <View style={content.boxPhotos}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={content.listPhotoBox}>
                                <Image
                                    source={{ uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit800600gsm/eventThirdParty/2022/04/28/3e2c5a6b-99ac-4ea3-b290-6f944a2568c5-1651091183138-403133861aad6af1b7d610a2a3c741a6.jpg' }}
                                    style={content.listPhoto}
                                    resizeMode='cover' />
                            </View>
                            <View style={content.listPhoto}>
                                <Image
                                    source={{ uri: 'https://blog.tiket.com/wp-content/uploads/Cantiknya-Blue-Fire-Kawah-Ijen_Blog-new-update-mei2020-Cara-Menuju-Kawah-Ijen.jpg' }}
                                    style={content.listPhoto}
                                    resizeMode='cover' />
                            </View>
                            <View style={content.listPhotoBox}>
                                <Image
                                    source={{ uri: 'https://kongkrit.com/wp-content/uploads/2023/10/Kawah-Ijen-1-750x400.png' }}
                                    style={content.listPhoto}
                                    resizeMode='cover' />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={content.boxBooking}>
                        <View style={content.boxSmallBooking}>
                            <Text style={content.textBooking1}>Price</Text>
                            <Text style={content.textBooking1Price}>$80</Text>
                        </View>
                        <TouchableOpacity style={content.boxSmallBooking2}>
                            <Text style={content.textBooking2}>Booking Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const content = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContent: {
        height: 475,
        width: '100%',
        backgroundColor: colors.white(),
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center'
    },
    title: {
        alignSelf: 'flex-start',
        marginTop: 5,
        lineHeight: 20,
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 18,
        color: colors.black(),
    },
    boxDescription: {
        height: 90,
        width: '100%',
        backgroundColor: colors.white(),
        marginVertical: 5,
    },
    textDescription: {
        fontFamily: fontType['Pps-Medium'],
        fontSize: 13,
        color: colors.grey(),
        textAlign: "justify",
    },
    boxPhotos: {
        height: 175,
        width: '100%',
        marginVertical: 5,
        paddingVertical: 2.5,
        flexDirection: 'row'
    },
    listPhotoBox: {
        height: 170,
        width: 170,
        backgroundColor: colors.white(),
        marginHorizontal: 6,
        borderRadius: 20
    },
    listPhoto: {
        height: 170,
        width: 170,
        borderRadius: 20
    },
    boxBooking: {
        marginTop: 6,
        height: 90,
        width: '100%',
        backgroundColor: colors.white(),
        borderRadius: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 20,
        elevation: 1
    },
    boxSmallBooking: {
        height: 70,
        width: 100,
        marginRight: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 10
    },
    boxSmallBooking2: {
        height: 50,
        width: 200,
        backgroundColor: '#2bbaae',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBooking1: {
        fontFamily: fontType['Pps-Medium'],
        fontSize: 14,
        color: colors.black(0.5),
        lineHeight: 25
    },
    textBooking1Price: {
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 20,
        color: '#2bbaae',
        lineHeight: 25
    },
    textBooking2: {
        fontFamily: fontType['Pps-Medium'],
        fontSize: 14,
        color: colors.white(),
        lineHeight: 25
    },

})

export default ExplorePage;