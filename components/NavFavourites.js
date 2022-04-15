import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Icon } from '@rneui/base';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "The White House, Washington, USA",
    },
];

const NavFavourites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tailwind`bg-gray-200 h-1`, { height: 0.5 }]} />
            )}
            renderItem={({ item }) => (
                <TouchableOpacity style={tailwind`flex-row items-center p-5`}>
                    <Icon
                        style={tailwind`mr-4 bg-gray-300 rounded-full p-3`}
                        name={item.icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tailwind`text-lg font-semibold text-black`}>{item.location}</Text>
                        <Text style={tailwind`text-sm font-semibold text-gray-500`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            )} />
    );
};

export default NavFavourites;

const styles = StyleSheet.create({});
