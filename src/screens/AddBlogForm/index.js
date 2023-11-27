import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';
import { fontType, colors } from '../../../src/theme';

const AddBlogPage = ({ route }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.navigate('ProfilePage')}>
                <ArrowLeft color={'#000000'} variant="Linear" size={24} style={{ marginLeft: 10 }} />
                <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>
            <ScrollView>
                <Form />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        height: 50,
        paddingHorizontal: 20,
        paddingTop: 25,
    },
    headerText: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: fontType['Pps-SemiBold']
    },
});

export default AddBlogPage;

const Form = () => {
    const [blogData, setBlogData] = useState({
        title: '',
        price: '',
        photos: '',
        description: '',
    });
    const handleChange = (key, value) => {
        setBlogData({
            ...blogData,
            [key]: value,
        });
    };
    return (
        <View style={form.container}>
            <View style={form.titleBox}>
                <TextInput
                    placeholder="Title"
                    value={blogData.title}
                    onChangeText={text => handleChange('title', text)}
                    multiline
                />
            </View>
            <View style={form.priceBox}>
                <TextInput
                    placeholder="Price"
                    value={blogData.price}
                    onChangeText={text => handleChange('price', text)}
                    multiline
                />
            </View>
            <View style={form.photosBox}>
                <TextInput
                    placeholder="Photos"
                    value={blogData.photos}
                    onChangeText={text => handleChange('photos', text)}
                    multiline
                />
            </View>
            <View style={form.descriptionBox}>
                <TextInput
                    placeholder="Description"
                    value={blogData.note}
                    onChangeText={text => handleChange('description', text)}
                    multiline
                />
            </View>
        </View>
    );
};

const form = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    titleBox: {
        backgroundColor: 'rgba(43, 186, 174, 0.2)',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 4
    },
    priceBox: {
        marginTop: 5,
        backgroundColor: 'rgba(43, 186, 174, 0.2)',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 4
    },
    photosBox: {
        marginTop: 5,
        backgroundColor: 'rgba(43, 186, 174, 0.2)',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 4
    },
    descriptionBox: {
        marginTop: 5,
        backgroundColor: 'rgba(43, 186, 174, 0.2)',
        height: 500,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 4
    },
});