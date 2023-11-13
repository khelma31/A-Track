import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button } from 'react-native';
import {
    Notification, Receipt21, Clock, Message, HambergerMenu, Profile,
    Location, Scroll, Like, LocationTick, Edit
} from 'iconsax-react-native';
import HorizontalContent from '../../../HorizontalContent';
import { fontType, colors } from '../../../src/theme';

const ProfilePage = () => {

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/236x/eb/75/7a/eb757a8e3e44f2486143dcf7ece59e61.jpg' }}
            style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.slider}>
                    <View style={profile.pic}>
                        <Image style={profile.image} source={{ uri: 'https://i.pinimg.com/564x/0a/8d/dc/0a8ddca85533fa3e61ff58908d05f347.jpg' }}></Image>
                    </View>
                    <Text style={profile.text}>First Name</Text>
                    <View style={profile.box}>
                        <Text style={profile.placeholder}>Mikhael</Text>
                    </View>
                    <Text style={profile.text}>Last Name</Text>
                    <View style={profile.box}>
                        <Text style={profile.placeholder}>Christian</Text>
                    </View>
                    <Text style={profile.text}>Email</Text>
                    <View style={profile.box}>
                        <Text style={profile.placeholder}>sumbulsidomukti@rocketmail.com</Text>
                    </View>
                    <TouchableOpacity style={profile.edit}>
                        <Text style={profile.editText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider: {
        marginTop: 130,
        paddingVertical: 25,
        paddingHorizontal: 50,
        backgroundColor: colors.white(),
        height: '200%',
        borderRadius: 25,
        elevation: 5,
    },
    backgroundImage: {
        width: '100%',
        height: '70%'
    },
})

const profile = StyleSheet.create({
    pic: {
        width: 125,
        height: 125,
        backgroundColor: colors.black(),
        borderRadius: 100,
        alignSelf: 'center',
        bottom: 70
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 100
    },
    text: {
        marginTop: 5,
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 16,
        color: colors.grey(),
    },
    box: {
        margin: 7,
        marginBottom: 7,
        height: 40,
        width: '100%',
        backgroundColor: colors.black(0.1),
        borderRadius: 15,
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    placeholder: {
        marginTop: 4,
        fontFamily: fontType['Pps-Regular'],
        fontSize: 14,
        color: colors.grey(),
    },
    edit: {
        marginTop: 50,
        height: 60,
        width: '100%',
        alignSelf: 'baseline',
        backgroundColor: colors.black(0.6),
        borderColor: '#eb4034',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    editText: {
        fontFamily: fontType['Pps-Medium'],
        fontSize: 20,
        color: colors.white(),
        alignSelf: 'center'
    }
})

export default ProfilePage;
