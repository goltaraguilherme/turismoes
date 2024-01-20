import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

const windowFontScale = Dimensions.get('window').fontScale;

function ButtonMapFilter({ text } : any){
    const [isPressed, setIsPressed] = useState<boolean>(false);

    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return(
        <TouchableOpacity 
            style={[styles.optionFilter, {backgroundColor: `${!isPressed ? "white" : "#E64072"}`}]}
            onPress={() => {setIsPressed(!isPressed)}}>
              {
                text === "Praia"
                ?
                <MaterialCommunityIcons name="island" size={18} color={isPressed ? "white" : "#E64072"} />
                :
                text === "Montanha"
                ?
                <Foundation name="mountains" size={18} color={isPressed ? "white" : "#E64072"} />
                :
                <MaterialCommunityIcons name="waterfall" size={18} color={isPressed ? "white" : "#E64072"} />
              }
              <Text style={[styles.textFilter, {color: `${isPressed ? "white" : "#E64072"}`}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    optionFilter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginVertical: 15,
        backgroundColor: "white",
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        
    },
    textFilter: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 1/windowFontScale*14,
    }
})

export default ButtonMapFilter;