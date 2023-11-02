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
import { HeaderHome } from '../components/headerHome';

const starIcon = require("../assets/star.png");
const beachPhoto = require("../assets/praia.png");

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


export function Home(){
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
                    <View style={styles.textCardContainer}>
                        <Text style={{fontFamily: "Montserrat_700Bold", color: "white", fontSize: 1/windowFontScale*18}}>
                            Nome
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source={starIcon} />
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    5,0
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
                            Nome
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source={starIcon} />
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    5,0
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
                            Nome
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Image source={starIcon} />
                                <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                    5,0
                                </Text>
                            </View>
                            <Text style={{fontFamily: "Montserrat_500Medium", color: "white", fontSize: 1/windowFontScale*14}}>
                                150 km
                            </Text>
                        </View>
                        
                    </View>
                </ImageBackground>
            </ScrollView>
            <TouchableOpacity style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={[styles.titleButton, {color: colors['gray-700']}]}>
                    Descobrir
                </Text>
                <Text style={[styles.titleButton, {color: colors['gray-700']}]}>
                    {'>'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={[styles.titleButton, {color: colors['gray-700']}]}>
                    Meus roteiros
                </Text>
                <Text style={[styles.titleButton, {color: colors['gray-700']}]}>
                    {'>'}
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
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*24,
        color: colors['gray-700']
    },
    cardTrend: {
        height: windowHeight*0.4,
        width: windowWidth*0.6,
        justifyContent: "flex-end",
        marginHorizontal: 15
    },
    textCardContainer: {
        backgroundColor: "#4343437d",
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