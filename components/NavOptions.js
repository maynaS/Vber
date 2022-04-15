import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
    {
        id: "123",
        title: "Get ride",
        image: "https://i.dlpng.com/static/png/6453338_preview.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://findicons.com/files/icons/630/japanese_stuff/512/food.png",
        screen: "EatScreen",
    },
];

const NavOptions = () => {
    const navigtion = useNavigation();
    // const origin = useSelector(selectOrigin);
    return (
        <View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigtion.push(item.screen)}
                        style={tw`p-2 pl-3 pb-8 pt-4 bg-gray-100 m-2`}
                    // disabled={!origin}
                    >
                        <View /* style={tw`${!origin && "opacity-20"}`} */>
                            <Image
                                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                                source={{ uri: item.image }}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold text-black text-center`}>{item.title}</Text>
                            <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4 ml-10`}
                                name="arrowright"
                                color="white"
                                type="antdesign"
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default NavOptions;
