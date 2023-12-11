import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { fontType, colors } from '../../../src/theme';
import AddBlogPage from '../AddBlogForm';
import { useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Schedule } from '../Schedule/schedule';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';

const ProfilePage = () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const getDataBlog = async () => {
        try {
            const response = await axios.get(
                'https://657198ffd61ba6fcc0130cb5.mockapi.io/atrackapp/blog',
            );
            setBlogData(response.data);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const subscriber = firestore()
            .collection('blog')
            .onSnapshot(querySnapshot => {
                const blogs = [];
                querySnapshot.forEach(documentSnapshot => {
                    blogs.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });
                setBlogData(blogs);
                setLoading(false);
            });
        return () => subscriber();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            firestore()
                .collection('blog')
                .onSnapshot(querySnapshot => {
                    const blogs = [];
                    querySnapshot.forEach(documentSnapshot => {
                        blogs.push({
                            ...documentSnapshot.data(),
                            id: documentSnapshot.id,
                        });
                    });
                    setBlogData(blogs);
                });
            setRefreshing(false);
        }, 1500);
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <ImageBackground
                source={{ uri: 'https://i.pinimg.com/236x/eb/75/7a/eb757a8e3e44f2486143dcf7ece59e61.jpg' }}
                style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.slider}>
                        <View style={profile.pic}>
                            <Image style={profile.image} source={{ uri: 'https://i.pinimg.com/564x/0a/8d/dc/0a8ddca85533fa3e61ff58908d05f347.jpg' }}></Image>
                        </View>
                        <View style={profile.textContainer}>
                            <Text style={profile.text}>
                                Miles Morales
                            </Text>
                            <Text style={profile.textMail}>
                                miles@rocketmail.com
                            </Text>
                        </View>
                        <View style={profile.btnContainer}>
                            <TouchableOpacity style={profile.edit}>
                                <Text style={profile.editText}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={profile.add} onPress={() => navigation.navigate(AddBlogPage)}>
                                <Text style={profile.addText}>Add Blog Form</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={profile.formContainer}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ gap: 10 }}>
                                    {loading ? (
                                        <ActivityIndicator size={'large'} color={colors.blue()} />
                                    ) : (
                                        blogData.map((item, index) => <Schedule item={item} key={index} />)
                                    )}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default ProfilePage;

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
        height: 587,
        borderRadius: 20,
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
    textContainer: {
        marginTop: 10,
        bottom: 55,
        height: 50,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'column'
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 100
    },
    text: {
        fontFamily: fontType['Pps-Bold'],
        fontSize: 18,
        color: colors.black(),
        alignSelf: 'center',
        lineHeight: 22
    },
    textMail: {
        fontFamily: fontType['Pps-SemiBold'],
        fontSize: 13,
        color: colors.grey(),
        alignSelf: 'center'
    },
    btnContainer: {
        bottom: 55,
        height: 75,
        backgroundColor: colors.black(0.0),
        paddingVertical: 10,
        width: 325,
        alignSelf: 'center',
        alignItems: "baseline",
        justifyContent: 'center',
        flexDirection: 'row'
    },
    formContainer: {
        bottom: 55,
        height: 350,
        width: 325,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    edit: {
        height: 53,
        width: 140,
        marginRight: 5,
        alignSelf: 'baseline',
        backgroundColor: colors.black(0.5),
        borderColor: '#eb4034',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignSelf: 'center'
    },
    add: {
        height: 53,
        width: 140,
        alignSelf: 'baseline',
        backgroundColor: "#2bbaae",
        borderColor: '#eb4034',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignSelf: 'center'
    },
    addText: {
        fontFamily: fontType['Pps-Medium'],
        fontSize: 15,
        color: colors.white(),
        alignSelf: 'center'
    },
    editText: {
        fontFamily: fontType['Pps-Medium'],
        fontSize: 15,
        color: colors.white(),
        alignSelf: 'center'
    }
});