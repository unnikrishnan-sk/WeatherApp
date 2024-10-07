import React from 'react'
import { FlatList, View } from 'react-native';
import { tabBarData } from '../constants/dummydata';
import { HEIGHT, WIDTH } from '../constants/dimensions';
import RenderTabBar from './RenderTabBar';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { setColors } from '../constants/color';

const MyTabBar = ({state, descriptors, navigation}) => {
    const place = useSelector((state)=>state.place)
    
  return (
    <View style={{ paddingHorizontal: WIDTH * 0.05,backgroundColor: setColors.tabBarBackground, alignItems: 'center', borderBottomColor: setColors.textGray, borderBottomWidth: 1, }}>
        <View style={{ width: WIDTH }}>
        <Navbar place={place.place[0]} state={place.place[1]}/>
        </View>
    <FlatList contentContainerStyle={{ justifyContent: 'space-between', width: WIDTH * 0.85, paddingTop: HEIGHT*0.01 }}
        horizontal
        data={tabBarData.map((item, index) => ({
            ...item,
        }))}
        renderItem={({ item, index }) => {
                const isFocused = state.index === index ;
                console.log(index,state.index);

            return (
                <RenderTabBar data={item} isFocused={isFocused} />
            );
        }}
        keyExtractor={item => item.id}
        />
    </View>
  )
}

export default MyTabBar