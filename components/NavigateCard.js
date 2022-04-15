import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tailwind`bg-white flex-1`}>
            <Text style={tailwind`text-black text-center py-5 text-xl`}>Good Morning</Text>
            <View style={tailwind`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        textInputProps={{ placeholderTextColor: 'gray' }}
                        styles={{
                            container: {
                                backgroundColor: '#fff',
                                paddingTop: 20,
                                flex: 0,
                            },
                            placeholderTextColor: {
                                color: 'black',
                            },
                            textInput: {
                                fontSize: 18,
                                color: 'black',
                                backgroundColor: "#DDDDDF",
                                borderRadius: 50,
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0,
                            },
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onPress={(data, details = null) => {
                            console.log(data, details);
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                            navigation.push('RideOptionsCar');
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
                </View>
                <NavFavourites />
            </View>
            <View style={tailwind`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity onPress={() => navigation.push("RideOptionsCard")} style={tailwind`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tailwind`text-white text-center text-sm`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`flex flex-row justify-between w-24 px-4 py-3`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                    <Text style={tailwind`text-black text-center text-sm`}>Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 40,
        flex: 0,
    },
});
