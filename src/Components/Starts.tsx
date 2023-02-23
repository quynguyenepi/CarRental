import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Starts(props: any) {
  const {color, size} = props;
  return (
    <View style={styles.extraInfoWrap}>
      <FontAwesome5
        name={'star'}
        color={color ? color : '#dada0c'}
        size={size ? size : 12}
        style={styles.extraInfoIcon}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  extraInfoWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  extraInfoIcon: {
    marginRight: 5,
  },
});
