import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {dashboard_logo} from '../assets';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {setColors} from '../constants/color';
import {useNavigation} from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('splash');
    }, 2000);
  }, []);

  return (
    <LinearGradient start={{x: 0.1, y: 0.9}} end={{x: 1.5, y: 0.8}} locations={[0.5, 0.1]} style={{flex: 1}} colors={[setColors.dashShadeWhite, setColors.gray]}>
      <View style={{ height: HEIGHT, paddingHorizontal: WIDTH * 0.05, paddingTop: HEIGHT * 0.1, alignItems: 'center', }}>
        <Image style={{marginTop: HEIGHT * 0.03}} source={dashboard_logo}></Image>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Weather</Text>
        <Text style={{fontSize: 24, fontWeight: 400, color: setColors.textGray}}>Forecast</Text>
      </View>
    </LinearGradient>
  );
};

export default DashboardScreen;
