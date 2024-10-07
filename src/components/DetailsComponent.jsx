import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { setColors } from '../constants/color'
import { partly_cloudy } from '../assets'
import DetailsItems from './DetailsItems'

const DetailsComponent = ({detailsData}) => {
    
  return (
    <View style={{ marginTop: HEIGHT*0.03, paddingHorizontal: WIDTH*0.03 }}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}}  locations={[0,0.4,1]}
    style={{ flex:1, borderRadius: HEIGHT*0.02 }}
    colors={[setColors.detailsShade1,setColors.detailsShade2,setColors.detailsShade3]}>
    <View style={{ paddingHorizontal: WIDTH*0.05, paddingTop: HEIGHT*0.02, borderRadius: HEIGHT*0.025, paddingBottom: HEIGHT*0.03 }}>
        <Text style={{ color: setColors.white, fontSize: 16, fontWeight: 700 }}>Details</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image style={{ height: HEIGHT*0.12, width: HEIGHT*0.18, marginTop: HEIGHT*0.04 }}
        source={partly_cloudy}></Image>
        <View>
        <FlatList
            data={detailsData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><DetailsItems data={item} /> }
            keyExtractor={item=>item.id}/>
        </View>
    </View>
    <Text style={{ marginTop: HEIGHT*0.03, color: setColors.textGray, fontSize: 11, fontWeight: 600 }}>Tonight - Clear, Winds from SW to SSW at 10 to 11 mph (16.1 to 17.7 kph). The overnight low will be 69*F (20.0*C)</Text>
    </View>
    </LinearGradient>
</View>
  )
}

export default DetailsComponent