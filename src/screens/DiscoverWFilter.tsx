// Melhorar Formatação
// Falta a bolinha rosa na imagem do Filtro Aplicado

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

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { colors } from '../styles/colors';

const seta = require("../assets/Voltar.png");
const starIcon = require("../assets/star.png");
const beachPhoto = require("../assets/praia.png");
const edit = require("../assets/edit.png");
const filter1 = require("../assets/FilterOne.png");

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


export function DiscWithFilter(){
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return(
        <SafeAreaView style = {styles.container}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 1}}>
                <View style={styles.setaContainer}>
                    <Image
                        source={seta}
                        style={styles.setaImg}
                    />
                </View>  
                <Text style={[styles.title, {color: colors['gray-700'], textAlign: 'center', marginLeft: 50, marginTop: 5}]}>
                Descobrir
                </Text>
                <View style={styles.filterContainer}>
                    <Image
                        source={filter1}
                        style={styles.filterImg}
                    />
                </View>  
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 19 }}>
                <Text style={[{fontFamily: "Montserrat_700Bold", textAlign: 'center', marginRight: 5, fontSize: 1/windowFontScale*19}]}> 
                    Filtro Aplicado
                </Text>
                <Text style={[{fontFamily: "Montserrat_500Medium", fontSize: 1/windowFontScale*19}]}> 
                (10 Resultados)
                </Text>
            </View>
            <ScrollView style={{maxHeight: windowHeight*0.8}}>
                <View>
                    <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
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

                    <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
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

                    <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
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

                    <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
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

                    <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
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

                    <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
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
                </View>
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
        paddingVertical: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        gap: 15,
    },
    setaImg: {    
        width: windowWidth*0.075,
        height: windowHeight*0.042,
    },
    filterImg: {    
        width: windowWidth*0.075,
        height: windowHeight*0.042,
    },
    filterContainer: {
        height: windowHeight*0.07,
        width: windowWidth*0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff"
    },
    setaContainer: {
        height: windowHeight*0.07,
        width: windowWidth*0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff"
    },
    circle: {
        borderRadius: 25,
        backgroundColor: 'white', // Cor do círculo
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIcon: {
        width: 20,
        height: 20,
    },
})