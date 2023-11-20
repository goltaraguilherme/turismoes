// Ao apertar em algum botao, ele fica colorido o nome com a cor do background 
// Usar a windowWidth e windowHeight para definir o tamanho dos componentes

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


const montanha = require("../assets/montanha.png");
const elipse2 = require("../assets/grupoelipse2.png");

const seta = require("../assets/Vector.png");

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


export function ChatCompa(){
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title1}>
                    Me Surpreenda
                </Text>
                <Text style={styles.title2}>
                    Qual sua companhia?
                </Text>
            </View> 
            <View style={styles.rowContainer}>
                <View style={styles.row}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={montanha}
                            style={styles.miniImage}
                        />
                        <Text style={styles.imageText}> Sozinho </Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={montanha}
                            style={styles.miniImage}
                        />
                        <Text style={styles.imageText}> Casal </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={montanha}
                            style={styles.miniImage}
                        />
                        <Text style={styles.imageText}> Amigos </Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={montanha}
                            style={styles.miniImage}
                        />
                        <Text style={styles.imageText}> Família </Text>
                    </View>
                </View>
            </View>
            <View style={styles.elipseContainer}>
                <Image
                    source={elipse2}
                />
            </View> 
            <View style={styles.text2Container}>
                <Text style={styles.title3}>
                    Próximo
                </Text>
            </View>
            <View style={styles.setaContainer}>
                <Image
                    source={seta}
                    style={styles.setaImg}
                />
            </View>    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#81A7D6',
        justifyContent: 'space-between'
    },
    textContainer: {
        justifyContent: 'space-between',
    },
    text2Container: {
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        height: windowHeight*0.05,
        width: windowWidth*0.87,
        left: 25,
    },
    setaContainer: {
        height: windowHeight*0.05,
        width: windowWidth*0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#81A7D6"
    },
    elipseContainer: {  
    height: windowHeight*0.005,
    left: 135,
    },
    setaImg: {    
        width: 30,
        height: 25,
    },
    title1: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*24, 
        color: "#FFFFFF",
        alignItems: 'center',    
        width: 190,
        height: 29,
        top: 40,
        left: 98
    },
    title2: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*18,
        color: "#FFFFFF",
        width: 220,
        height: 22,
        top: 80,
        left: 5,
        marginHorizontal: 18
    },
    title3: {   
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*18,
        color: "#81A7D6",
        top: 5,
    },
    rowContainer: {
        justifyContent: "flex-end",
        alignItems: 'center',
        height: windowHeight*0.55,
        width: windowWidth*0.9,
        marginHorizontal: 18
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        margin: 5,
    },
    miniImage: {
        width: 36,
        height: 25,
        top: 35
    },
    imageText: {
        marginTop: 80,
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*18,
        color: "#81A7D6"
    },
})