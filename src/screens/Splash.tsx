import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';

export default function Splash({navigation}) {
  useEffect(() => {
    // createChannels();
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Text style={GlobalStyle.textContent}>Convenient car</Text>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../assets/Chevrolet-Corvette.webp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 300,
    height: 300,
    margin: 20,
  },
});
