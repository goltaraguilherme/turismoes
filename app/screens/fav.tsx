// Ajustar o Texto dentro do Card

import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    ImageBackground
} from 'react-native';

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { colors } from '../styles/colors';

const starIcon = require("../assets/star.png");
const beachPhoto = require("../assets/praia.png");

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


export function Fav(){
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return(
        <SafeAreaView style = {styles.container}>
            <Text style={styles.title}>
                Favoritos
            </Text>
            <ScrollView style={{maxHeight: windowHeight*0.8}}>
                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 25}}>
                    <View style={styles.textCardContainer}> 
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Jardim Camburi
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            Bairro
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source={starIcon} />
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    4,0
                                </Text>
                            </View>
                            <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                10 km
                            </Text>
                        </View>
                    </View>
                </ImageBackground>

                
                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 25}}>
                    <View style={styles.textCardContainer}>
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Praia da Costa
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            Bairro
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source={starIcon} />
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    5,0
                                </Text>
                            </View>
                            <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                25 km
                            </Text>
                        </View>
                    </View>
                </ImageBackground>


                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 25}}>
                    <View style={styles.textCardContainer}>
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Peracanga
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            Praia
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source={starIcon} />
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    5,0
                                </Text>
                            </View>
                            <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                50 km
                            </Text>
                        </View>
                    </View>
                </ImageBackground>


                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 25}}>
                    <View style={styles.textCardContainer}>
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Iriri
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            Balneário
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source={starIcon} />
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    4,7
                                </Text>
                            </View>
                            <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                150 km
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 30,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginTop: 20,
        fontSize: 1/windowFontScale*24,
        color: colors['gray-700'],
        textAlign: 'center',
    },
    cardTrend: {
        height: windowHeight*0.35,
        width: windowWidth*0.9,
        justifyContent: "flex-end",
        marginHorizontal: 19,
        marginTop: 20,  
    },
    textCardContainer: {
        backgroundColor: "#4343437d",
        paddingHorizontal: 20,
        paddingVertical: 73,
        borderRadius: 25,
        gap: 15,
    },
})