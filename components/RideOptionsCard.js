import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import tailwind from 'twrnc';
import { Icon } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
    },
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    return (
        <SafeAreaView style={tailwind`bg-white flex-grow`}>
            <View >
                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tailwind`absolute top-3 left-5 p-3 rounded-full z-50`} >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tailwind`text-black text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tailwind`flex-row justify-between items-center px-5 h-18 ${item.id === selected?.id && "bg-gray-200"}`}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: item.image }}
                        />
                        <View style={tailwind`-ml-6`}>
                            <Text style={tailwind`text-black text-xl font-semibold`}>{item.title}</Text>
                            <Text style={tailwind`text-black`}> {travelTimeInformation?.duration.text} Travel Time...</Text>
                        </View>
                        <Text style={tailwind`text-xl text-black`} >99 &#8377;</Text>
                    </TouchableOpacity>
                )
                }
            />
            <View style={tailwind`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={tailwind`bg-black m-3 rounded-full ${!selected && `bg-gray-300`}`}>
                    <Text style={tailwind`text-white text-center py-3 text-xl`}>Choose: {selected?.id}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
