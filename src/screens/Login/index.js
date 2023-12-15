import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity, ActivityIndicator, Alert, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { colors, fontType } from '../../theme';
import { Eye, EyeSlash } from 'iconsax-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLoginDisabled, setLoginDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        let errorMessage = '';
        setLoading(true);
        try {
            await auth().signInWithEmailAndPassword(email, password);
            const userToken = await auth().currentUser.getIdToken();
            const expirationInMilliseconds = 30 * 24 * 60 * 60 * 1000; //hari * jam * menit * detik * milidetik
            const expirationTime = new Date().getTime() + expirationInMilliseconds;
            const dataToStore = {
                userToken,
                expirationTime,
            };
            await AsyncStorage.setItem('userData', JSON.stringify(dataToStore));
            setLoading(false);
            navigation.navigate('MainApp');
        } catch (error) {
            setLoading(false);
            console.log('Login Error:', error.message);
            if (error.code === 'auth/invalid-email') {
                errorMessage = 'Email tidak valid.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Password salah.';
            } else if (error.code === 'auth/invalid-login') {
                errorMessage = 'Email atau password salah, silahkan periksa kembali.';
            } else {
                errorMessage = 'Terjadi kesalahan saat login.';
            }
            Alert.alert('Error', errorMessage);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const updateLoginButtonStatus = () => {
        if (email.trim() && password.trim()) {
            setLoginDisabled(false);
        } else {
            setLoginDisabled(true);
        }
    };
    useEffect(() => {
        updateLoginButtonStatus();
    }, [email, password]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header1}>Let's Sign you in</Text>
                    <Text style={styles.header2}>
                        Welcome Back.
                    </Text>
                    <Text style={styles.header3}>
                        The Track missed you
                    </Text>
                    <View style={styles.form}>
                        <View>
                            <View style={textinput.container}>
                                <TextInput
                                    placeholder="Your Email"
                                    placeholderTextColor={colors.grey(0.6)}
                                    value={email}
                                    onChangeText={text => {
                                        setEmail(text);
                                        updateLoginButtonStatus();
                                    }}
                                    inputMode="email"
                                    keyboardType="email-address"
                                    style={textinput.text}
                                />
                            </View>
                        </View>
                        <View>
                            <View
                                style={[
                                    textinput.container,
                                    {
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: 10,
                                    },
                                ]}>
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor={colors.grey(0.6)}
                                    value={password}
                                    onChangeText={text => {
                                        setPassword(text);
                                        updateLoginButtonStatus();
                                    }}
                                    secureTextEntry={!passwordVisible}
                                    style={[textinput.text, { flex: 1 }]}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility}>
                                    {passwordVisible ? (
                                        <Eye variant="Linear" color={colors.grey(0.6)} size={20} />
                                    ) : (
                                        <EyeSlash
                                            variant="Linear"
                                            color={colors.grey(0.6)}
                                            size={20}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ gap: 10, marginTop: 20 }}>
                    <TouchableHighlight
                        style={[
                            button.container,
                            {
                                backgroundColor: isLoginDisabled
                                    ? "rgba(43, 186, 174, 0.5)"
                                    : "rgba(43, 186, 174, 1)",
                            },
                        ]}
                        underlayColor={colors.white()}
                        onPress={handleLogin}
                        disabled={isLoginDisabled}>
                        {loading ? (
                            <ActivityIndicator color={colors.white()} />
                        ) : (
                            <Text style={button.label}>LOG IN</Text>
                        )}
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Text style={[button.label, { color: colors.black() }]}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
                            <Text style={[button.label, { color: "rgba(43, 186, 174, 1)" }]}>
                                Register Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white(),
        paddingHorizontal: 24,
        paddingVertical: 60,
        justifyContent: 'space-between',
    },
    header1: {
        fontSize: 32,
        fontFamily: fontType['Pps-Bold'],
        color: "#11999E"
    },
    header2: {
        fontFamily: fontType['Pps-SemiBold'],
        color: "#30E3CA",
        fontSize: 24,
        marginTop: 5,
    },
    header3: {
        fontFamily: fontType['Pps-SemiBold'],
        color: "#30E3CA",
        fontSize: 24,
        marginBottom: 40
    },
    form: {
        gap: 20,
    },
});

const textinput = StyleSheet.create({
    label: {
        fontFamily: fontType['Pps-Medium'],
        fontSize: 14,
        color: colors.grey(0.6),
        marginBottom: 5,
    },
    container: {
        backgroundColor: colors.grey(0.05),
        height: 52,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    text: {
        paddingVertical: 0,
        color: colors.black(),
        fontFamily: fontType['Pps-Regular'],
    },
});

const button = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 16,
        alignItems: 'center',
    },
    label: {
        color: colors.white(),
        fontSize: 14,
        fontFamily: fontType['Pps-SemiBold'],
    },
});