import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    LocationAccuracy,
    LocationObject
} from 'expo-location';

import { AntDesign } from '@expo/vector-icons';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { colors } from '../../styles/colors';
import ButtonMapFilter from '../../components/buttonMapFilter';

const windowFontScale = Dimensions.get('window').fontScale;


function map(){
    const [loading, setLoading] = useState<boolean>(false);
    const [location, setLocation] = useState<LocationObject>();
    const [locationPermission, setLocationPermission] = useState<boolean>(false);

    const mapRef = useRef(MapView);

    async function requestLocationPermission(){
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            setLocationPermission(true);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    },[]);

    useEffect(() => {
        if(locationPermission){
            watchPositionAsync({
                accuracy: LocationAccuracy.Highest,
                timeInterval: 1000,
                distanceInterval: 1
            }, (response:any) => {
                setLocation(response.coords)
            })
        }
    }, [])

    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold
    })
    
    if(!fontsloaded)
        return null

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerSearch}>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignSelf: "stretch",
              width: "100%",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 20,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            <AntDesign name="search1" size={18} color="#B7B7BF" />
            <TextInput
              style={styles.inputSearch}
              placeholder="Onde vamos hoje?"
            />
          </View>

          <ScrollView horizontal={true}>
            <ButtonMapFilter text={"Praia"} />
            <ButtonMapFilter text={"Montanha"} />
            <ButtonMapFilter text={"Cachoeira"} />
          </ScrollView>
        </View>
        {loading ? (
          <ActivityIndicator size={60} color="#E64072" />
        ) : (
          location && (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              customMapStyle={mapStyle}
              initialRegion={{
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location?.coords.latitude,
                  longitude: location?.coords.longitude,
                }}
              />
            </MapView>
          )
        )}
      </SafeAreaView>
    );
}

const mapStyle = [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.natural.landcover",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "landscape.natural.terrain",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.natural.terrain",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    map: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    headerSearch: {
        position: "absolute",
        alignSelf: "stretch",
        width: "100%",
        padding: 20,
        zIndex: 2,
    },
    inputSearch: {
        flex: 1,
        fontFamily: "Montserrat_500Medium",
        fontSize: 1/windowFontScale*14,
    }
})

export default map;