import React from 'react'
import { Text, View } from 'react-native'
import { setColors } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimensions'

const DetailsItems = ({data}) => {
    const { id, text, value } = data;

  return (
    <View style={{ flexDirection: 'row', paddingTop: HEIGHT*0.02 }}>
        <Text style={{ color: setColors.textGray, fontSize: 13 }}>{text || 'NA'}</Text>
        <Text style={{ color: setColors.white, marginStart: WIDTH*0.15 }}>{value || 'NA'}</Text>
        
    </View>
  )
}

export default DetailsItems