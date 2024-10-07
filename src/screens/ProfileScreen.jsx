import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { close_icon, profile_image } from '../assets'
import { setColors } from '../constants/color'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { profileLocationData, toolsData } from '../constants/dummydata'
import ProfileLocationComponent from '../components/ProfileLocationComponent'
import ToolsProfileComponent from '../components/ToolsProfileComponent'

const ProfileScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#27282D', height: HEIGHT }}>
        <View style={{ borderBottomWidth: 2, paddingBottom: WIDTH*0.04, borderBottomColor: '#2F3036', flexDirection: 'row', paddingHorizontal: WIDTH*0.05, paddingTop: HEIGHT*0.05, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
            <Image source={profile_image}></Image>
            <Text style={{ color: setColors.white, fontWeight: 700, paddingTop: HEIGHT*0.02, marginLeft: WIDTH*0.04 }}>WeatherApp</Text>
        </View>
            <Pressable onPress={()=>navigation.dispatch(DrawerActions.closeDrawer())}>
            <Image style={{ marginTop: HEIGHT*0.02 }}
            source={close_icon}></Image>
            </Pressable>
        </View>
    <View style={{ borderBottomWidth: 2, borderBottomColor: '#2F3036', paddingBottom: HEIGHT*0.04 }}>
        <Text style={{ color: setColors.white, marginTop: HEIGHT*0.03, paddingLeft: WIDTH*0.05, fontWeight: 600, fontSize: 18 }}>Location  |   <Text style={{ color: '#4BDDF2', fontWeight: 500, fontSize: 16 }}>Edit</Text></Text>
        <FlatList
            data={profileLocationData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><ProfileLocationComponent data={item} /> }
            keyExtractor={item=>item.id}/>
    </View>
    <View style={{ paddingHorizontal: WIDTH*0.05, paddingTop: HEIGHT*0.03, }}>
        <Text style={{ color: setColors.textGray, fontSize: 16 }}>Tools</Text>
            <FlatList
            data={toolsData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><ToolsProfileComponent data={item} /> }
            keyExtractor={item=>item.id}/>
    </View>    
    </View>
  )
}

export default ProfileScreen