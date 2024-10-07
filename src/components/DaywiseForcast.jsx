import React, {  useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { setColors } from '../constants/color'
import { down_arrow, precipitation, up_arrow } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { dropDetails } from '../constants/dummydata'
import LinearGradient from 'react-native-linear-gradient'

const DaywiseForcast = ({data, isCelsius, finalDataArray }) => {

    const {id, day, image, high, low, high_f, low_f} = data;
    const [selectedId,setSelectedId] = useState(null);
    const [showDetails,setShowDetails] = useState(false)

    const showDetailsFn = (id) => {
        if(selectedId === id) setSelectedId(null)
        else{ setSelectedId(id);}
        setShowDetails(!showDetails);
    }

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}}  locations={[0,0.5,1]} style={{ flex:1, borderRadius: HEIGHT*0.02 }}
    colors={showDetails ? [setColors.forecastShade1,setColors.forecastShade2,setColors.forecastShade3] : [setColors.forecastShade4,setColors.forecastShade5,setColors.forecastShade6]}>
    <View style={{ borderRadius: HEIGHT*0.02, padding: HEIGHT*0.01 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT*0.01 }}>
        <Pressable onPress={()=>showDetailsFn(id)} style={{ width: WIDTH*0.25, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={ selectedId && selectedId===id? down_arrow : up_arrow}></Image>
    <Text style={{
        color: setColors.white,
        fontSize: 14,
        marginLeft: WIDTH*0.02
    }}>{id===0? "Today": day || 'NA'}</Text>
    </Pressable>
    <Image source={image}></Image>
    <View style={{ width: WIDTH*0.2, flexDirection: 'row' }}>
    <Text style={{ color: setColors.white }}>{isCelsius && isCelsius? `${high.toFixed(0)}C` : `${high_f.toFixed(0)}F` || 'NA'}</Text>
    <Text style={{ color: setColors.white, marginLeft: WIDTH*0.05 }}>{isCelsius && isCelsius? `${low.toFixed(0)}C` : `${low_f.toFixed(0)}F` || 'NA'}</Text>
    </View>
    </View>

    { showDetails &&
     <View style={{ marginTop: HEIGHT*0.02, flexDirection: 'row', backgroundColor: setColors.forecastText, alignItems: 'center', justifyContent: 'space-between', borderRadius: HEIGHT*0.02, padding: HEIGHT*0.01 }}>
    {dropDetails.map((item,index)=>(
            <View style={{ paddingHorizontal: HEIGHT*0.012, paddingVertical: HEIGHT*0.01, alignItems: 'center', borderRadius: HEIGHT*0.02, backgroundColor: setColors.forecastTextBackground }}>
            <Image source={precipitation}></Image>
            <Text style={{ color: setColors.white, fontSize: 14, fontWeight: 600, marginTop: HEIGHT*0.02 }}>{isCelsius && isCelsius?item.climate_c:item.climate_f || 0}</Text>
            <Text style={{ color: setColors.textGray, fontSize: 12, marginTop: HEIGHT*0.006 }}>{item.time}</Text>
            </View> 
    ))}
    </View>
    }
</View>
</LinearGradient>
  )
}

export default DaywiseForcast