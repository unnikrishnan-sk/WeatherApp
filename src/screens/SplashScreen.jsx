import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Pressable, Text, View } from 'react-native'
import { next_arrow } from '../assets'
import { Path, Svg } from 'react-native-svg'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { setColors } from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import { splashData } from '../constants/dummydata'

const SplashScreen = () => {

    const [id,setId] = useState(0);
    const navigation = useNavigation();
    const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        const animation = Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        });
        const animationInstance = animation.start();

        return () => {
            if(animationInstance){
                animationInstance.stop();
            }
        }
    },[fadeAnim,id])
    return(
        <Animated.View
        style={{
            opacity: fadeAnim,
        }}>{props.children}
        </Animated.View>
    )
    }
    const handleSplashBtn = () => {
        if(id<3) setId(id+1)
        else{ navigation.navigate('home')} 
    }

  return (
    <>
    <View style={{ backgroundColor: setColors.white, height: HEIGHT }}>
        <View style={{ backgroundColor: '#484B5B' }}>
            <Pressable onPress={()=>navigation.navigate('home')}
            style={{ height: HEIGHT*0.04, width: WIDTH*0.15, alignItems: 'center', justifyContent:'center', alignSelf: 'flex-end', marginTop: HEIGHT*0.05 }}>
            <Text 
            style={{ color: setColors.white, fontSize: 14, fontWeight: 500 }}>Skip</Text>
            </Pressable>
           <FadeInView>
            <Image style={{ height: HEIGHT*0.49 }} source={splashData && splashData[id]?.image}></Image>
            </FadeInView> 
        </View>
    <Svg height={HEIGHT*0.62} width={WIDTH} viewBox="0 0 100 100"
     style={{ width: WIDTH, position: 'absolute', top: HEIGHT*0.271 }}>
     <Path d="M 0,50 Q 50,5 100,50" strokeWidth="2.5" fill="#FFFFFF" />
    </Svg>
    <FadeInView>
    <View style={{ alignItems: 'center', paddingTop: HEIGHT*0.02, paddingHorizontal: WIDTH*0.2 }}>
     <Text style={{ fontSize: 28, textAlign: 'center', fontWeight: 600, color: setColors.black }}>{splashData && splashData[id]?.title || "Some Error"}</Text>
     <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: HEIGHT*0.03, color: setColors.textGray, fontWeight: 300 }}>{splashData && splashData[id]?.desc || "Some Error"}</Text>
     </View>
     </FadeInView>
     <View style={{ alignItems: 'center', paddingTop: HEIGHT*0.02 }}>
     <View style={{ borderWidth: 1, borderColor: setColors.gray, height: HEIGHT*0.14, width: HEIGHT*0.14, borderRadius: HEIGHT*0.07, alignItems: 'center', justifyContent: 'center' }}>
        <Pressable 
        onPress={()=>handleSplashBtn()}
        style={{ height: HEIGHT*0.1, width: HEIGHT*0.1, borderRadius: HEIGHT*0.05, backgroundColor: '#484B5B', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={next_arrow}></Image>
        </Pressable>
     </View>
     </View>
    </View>
     </>
  )
}

export default SplashScreen