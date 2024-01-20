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
const beachPhoto = require("../assets/praia.png");

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


export function MyItin(){
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
                <Text style={[styles.title, {color: colors['gray-700'], marginLeft: 30}]}>
                    Meus roteiros
                </Text>
            </TouchableOpacity>

            <ScrollView style={{maxHeight: windowHeight*0.8}}>
                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
                    <View style={styles.textCardContainer}> 
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Criado ontem às 09:50
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            5 Destinos
                        </Text>
                    </View>
                </ImageBackground>

                
                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
                    <View style={styles.textCardContainer}> 
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Roteiro 2
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            4 Destinos
                        </Text>
                    </View>
                </ImageBackground>


                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
                    <View style={styles.textCardContainer}> 
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Roteiro 3
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            5 Destinos
                        </Text>
                    </View>
                </ImageBackground>


                <ImageBackground source={beachPhoto} style={styles.cardTrend} imageStyle={{borderRadius: 15}}>
                    <View style={styles.textCardContainer}> 
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Criado hoje às 10:30
                        </Text>
                        <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*15}}>
                            3 Destinos
                        </Text>
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
    setaContainer: {
        height: windowHeight*0.07,
        width: windowWidth*0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff"
    },
})