import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { Fontisto } from '@expo/vector-icons';

import { colors } from '../../styles/colors';
import { HeaderHome } from '../../components/headerHome';

const starIcon = require("../../assets/star.png");
const beachPhoto = require("../../assets/praia.png");

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


function home(){
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderHome />
            <Text style={styles.title}>
                Em alta
            </Text>
            <ScrollView horizontal={true} style={{maxHeight: windowHeight*0.4}}>
                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.3)' , 'rgba(0,0,0,0.9)']} style={{flex: 1, justifyContent: "flex-end", borderRadius: 15}}>
                        <View style={styles.textCardContainer}>
                            <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                                Nome
                            </Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                    <Fontisto name="star" size={12} color="white" />
                                    <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                        5,0
                                    </Text>
                                </View>
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    150 km
                                </Text>
                            </View>
                            
                        </View>
                    </LinearGradient>
                </ImageBackground>

                
                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.3)' , 'rgba(0,0,0,0.9)']} style={{flex: 1, justifyContent: "flex-end", borderRadius: 15}}>
                        <View style={styles.textCardContainer}>
                            <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                                Nome
                            </Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                    <Fontisto name="star" size={12} color="white" />
                                    <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                        5,0
                                    </Text>
                                </View>
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    150 km
                                </Text>
                            </View>
                            
                        </View>
                    </LinearGradient>
                </ImageBackground>

                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.3)' , 'rgba(0,0,0,0.9)']} style={{flex: 1, justifyContent: "flex-end", borderRadius: 15}}>
                        <View style={styles.textCardContainer}>
                            <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                                Nome
                            </Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                    <Fontisto name="star" size={12} color="white" />
                                    <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                        5,0
                                    </Text>
                                </View>
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    150 km
                                </Text>
                            </View>
                            
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
            <TouchableOpacity style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={[styles.titleButton, {color: colors['gray-700']}]}>
                    Descobrir
                </Text>
                <Text style={[styles.titleButton]}>
                    <Fontisto name="angle-right" size={16} color={colors['gray-700']} />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={[styles.titleButton]}>
                    Meus roteiros
                </Text>
                <Text style={[styles.titleButton, {color: colors['gray-700']}]}>
                    <Fontisto name="angle-right" size={16} color={colors['gray-700']} />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, backgroundColor: colors['primary-cyan'], borderRadius: 30}}>
                <Text style={[styles.titleButton, {color: "white"}]}>
                    Me surpreenda
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 30,
        justifyContent: 'space-between',
        backgroundColor: "white"
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*24,
        color: colors['gray-700']
    },
    cardTrend: {
        flex: 1,
        height: windowHeight*0.4,
        width: windowWidth*0.6,
        marginHorizontal: 15
    },
    textCardContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        gap: 15
    },
    titleButton: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*18,
    },
})

export default home;