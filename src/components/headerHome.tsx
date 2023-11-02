import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { colors } from '../styles/colors';

const fotoImg = require("../assets/foto.png");
const settingsIcon = require("../assets/settings.png");
const windowFontScale = Dimensions.get('window').fontScale;


export function HeaderHome(){
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return(
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Image source={fotoImg} />
                <View style={styles.textContainer}>
                    <Text style={{fontFamily: "Montserrat_500Medium", fontSize: 1/windowFontScale*14, color: colors['gray-500']}}>
                        Boa tarde,
                    </Text>
                    <Text style={{fontFamily: "Montserrat_700Bold", fontSize: 1/windowFontScale*18, color: colors['gray-700']}}>
                        Guilherme
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image source={settingsIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 30,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 2,
    }
})