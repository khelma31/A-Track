import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { fontType, colors } from '../../../src/theme';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export const Schedule = ({ item }) => {
    const navigation = useNavigation();

    return (
            <TouchableOpacity
                style={schedule.container}
                onPress={() => {
                    navigation.navigate('EditBlogPage', {blogId: item.id})
                }}>
                <View style={schedule.contentCard}>
                    <Image style={schedule.cardImage} source={{ uri: item.image }} />
                    <View style={schedule.cardText}>
                        <Text style={schedule.textTitle}>
                            {item.title}
                        </Text>
                        <Text style={schedule.textPrice}>
                            {item.price}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

    )
}

const schedule = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    contentCard: {
        height: 80,
        width: '100%',
        backgroundColor: colors.black(0.1),
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    cardImage: {
        height: 80,
        width: '40%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        right: 187,
        position: 'absolute'
    },
    cardText: {
        height: 80,
        width: '63.8%',
        left: 59,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    textTitle: {
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 15,
        color: colors.black(),
        alignSelf: 'center',
        right: 10
    },
    textPrice: {
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 13,
        color: colors.black(0.5),
        alignSelf: 'center',
        right: 55
    },
})

