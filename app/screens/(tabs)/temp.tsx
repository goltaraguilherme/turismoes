import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { colors } from '../../styles/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


function temp(){
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return(
        <SafeAreaView style = {styles.container}>
            <Text>Mapa</Text>
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

export default temp;