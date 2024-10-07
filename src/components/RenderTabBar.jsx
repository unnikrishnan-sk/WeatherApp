import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text } from 'react-native';
import {  setColors } from '../constants/color';
import { HEIGHT, WIDTH } from '../constants/dimensions';

const RenderTabBar = ({ data, isFocused, index }) => {
    const { id, title, route } = data;
    const navigation = useNavigation();

    return (
        <>
             <Pressable onPress={() => navigation.navigate(route)}
                style={{ alignItems: 'center', marginLeft: id !== 0 ? WIDTH * 0.03 : 0, borderBottomWidth: isFocused ? 1 : 0, paddingBottom: HEIGHT*0.02, borderBottomColor: isFocused ? setColors.white : setColors.textGray }}>
                    <Text style={{ fontSize: 16, fontWeight:500, marginTop: HEIGHT * 0.006, color: isFocused ?setColors.white : setColors.textGray }}>{title || 'NA'}</Text>
                </Pressable>
        </>
    )
}

export default RenderTabBar