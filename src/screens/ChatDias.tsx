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


const elipse3 = require("../assets/grupoelipse3.png");

const seta = require("../assets/Vector.png");

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const windowFontScale = Dimensions.get('window').fontScale;


export function ChatD(){
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
                    Qual a duração da sua viagem?
                </Text>
            </View> 
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.diasContainer}>
                    <Text style={styles.titleD}>
                        1 dia
                    </Text>
                </View>
                <View style={styles.diasContainer}>
                    <Text style={styles.titleD}>
                        2 dias
                    </Text>
                </View>
                <View style={styles.diasContainer}>
                    <Text style={styles.titleD}>
                        3 dias
                    </Text>
                </View>
                <View style={styles.diasContainer}>
                    <Text style={styles.titleD}>
                        4 dias
                    </Text>
                </View>
                <View style={styles.diasContainer}>
                    <Text style={styles.titleD}>
                        5 dias
                    </Text>
                </View>
                <View style={styles.diasContainer}>
                    <Text style={styles.titleD}>
                        6 dias
                    </Text>
                </View>      
                <View style={styles.diasContainer}>              
                    <Text style={styles.titleD}>
                        7 dias
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.elipseContainer}>
                <Image
                    source={elipse3}
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
    diasContainer: {
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: '#81A7D6',
        borderRadius: 50,
        alignItems: 'center',
        height: windowHeight*0.07,
        width: windowWidth*0.87,
        left: 25,
        marginTop: 10,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 85,
    },
    setaContainer: {
        height: windowHeight*0.05,
        width: windowWidth*0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#81A7D6"
    },
    elipseContainer: {  
    height: windowHeight*0.05,
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
        width: 300,
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
    titleD: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*18,
        top: 10,
        color: "#fff",
    }
})