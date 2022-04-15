import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain',
                    }}
                    source={{
                        uri: 'https://download.logo.wine/logo/Uber/Uber-Logo.wine.png',
                    }} />
                {/* Google Places Autocomplete will not work because i have not enabled billing on my account yet */}
                <GooglePlacesAutocomplete
                    placeholder="Where from?"
                    textInputProps={{ placeholderTextColor: 'gray' }}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        placeholderTextColor: {
                            color: 'black',
                        },
                        textInput: {
                            fontSize: 18,
                            color: 'black',
                        },
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    onPress={(data, details = null) => {
                        console.log(data, details);
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }));
                        dispatch(setDestination(null));
                    }}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: 'red',
    },
});
