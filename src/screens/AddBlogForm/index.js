import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { ArrowLeft, AddSquare, Add } from 'iconsax-react-native';
import { fontType, colors } from '../../../src/theme';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';

const AddBlogPage = () => {

    const handleImagePick = async () => {
        ImagePicker.openPicker({
            width: 1920,
            height: 1080,
            cropping: true,
        })
            .then(image => {
                console.log(image);
                setImage(image.path);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleUpload = async () => {
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`blogimages/${filename}`);

        setLoading(true);
        try {
            await reference.putFile(image);
            const url = await reference.getDownloadURL();
            await firestore().collection('blog').add({
                title: blogData.title,
                price: blogData.price,
                image: url,
            });
            setLoading(false);
            console.log('Blog added!');
            navigation.navigate('ProfilePage');
        } catch (error) {
            console.log(error);
        }
    };

    const [image, setImage] = useState(null);

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const [blogData, setBlogData] = useState({
        title: '',
        price: '',
        image: '',
    });

    const handleChange = (key, value) => {
        setBlogData({
            ...blogData,
            [key]: value,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.navigate('ProfilePage')}>
                <ArrowLeft color={'#000000'} variant="Linear" size={24} style={{ marginLeft: 10 }} />
                <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>
            <ScrollView>
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
                    {image ? (
                        <View style={{ position: 'relative' }}>
                            <FastImage
                                style={{ width: '100%', height: 127, borderRadius: 5 }}
                                source={{
                                    uri: image,
                                    headers: { Authorization: 'someAuthToken' },
                                    priority: FastImage.priority.high,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    top: -5,
                                    right: -5,
                                    backgroundColor: colors.blue(),
                                    borderRadius: 25,
                                }}
                                onPress={() => setImage(null)}>
                                <Add
                                    size={20}
                                    variant="Linear"
                                    color={colors.white()}
                                    style={{ transform: [{ rotate: '45deg' }] }}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={handleImagePick}>
                            <View
                                style={[
                                    styles.borderDashed,
                                    {
                                        gap: 10,
                                        paddingVertical: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}>
                                <AddSquare color={"#2bbaae"} variant="Linear" size={42} />
                                <Text
                                    style={{
                                        fontFamily: fontType['Pps-Regular'],
                                        fontSize: 12,
                                        color: colors.grey(0.6),
                                    }}>
                                    Upload Thumbnail
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={form.btnUpload} onPress={handleUpload}>
                        <Text style={form.textBtn}>
                            Upload
                        </Text>
                    </TouchableOpacity>
                    {loading && (
                        <View style={styles.loadingOverlay}>
                            <ActivityIndicator size="large" color='#2bbaae' />
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default AddBlogPage;

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
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderDashed: {
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
        borderColor: "#2bbaae",
    },
});

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
    imageBox: {
        marginTop: 5,
        backgroundColor: 'rgba(43, 186, 174, 0.2)',
        height: 400,
        width: '100%',
        justifyContent: 'flex-start',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 4
    },
    descriptionBox: {
        marginTop: 5,
        backgroundColor: 'rgba(43, 186, 174, 0.2)',
        height: 425,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 4
    },
    btnUpload: {
        alignSelf: 'center',
        marginTop: 20,
        height: 50,
        width: '100%',
        backgroundColor: "#2bbaae",
        borderRadius: 10,
        justifyContent: 'center'
    },
    textBtn: {
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 16,
        color: colors.white(),
        alignSelf: 'center'
    }
});