import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {selectState} from '../ReduxToolkit/FindCarSlice';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Starts from '../Components/Starts';
export default function FindCar({navigation}) {
  const {availableCars} = useSelector(selectState);
  const onCarDetailHadler = (item: any) => {
    navigation.navigate('CarDetail', item);
  };
  const renderStar = (stars: number) => {
    let xhtml = [];
    for (let index = 1; index <= stars; index++) {
      xhtml.push(<Starts key={index.toString()} />);
    }
    return xhtml;
  };
  return (
    <View style={styles.body}>
      <FlatList
        data={availableCars}
        renderItem={({item}) => (
          <TouchableOpacity
            style={!item.booked ? styles.item : styles.itemOp}
            onPress={() => onCarDetailHadler(item)}>
            <View style={styles.item_row}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <View style={styles.item_body}>
                <View style={styles.content}>
                  <View style={styles.carImage}>
                    <Image
                      source={{uri: item.url}}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.subtitle} numberOfLines={5}>
                    {item.desc}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.extraInfo}>
              <View style={styles.extraInfoWrap}>
                <FontAwesome5
                  name={'clock'}
                  size={12}
                  style={styles.extraInfoIcon}
                />
                <Text style={styles.extraInfoText} numberOfLines={1}>
                  7h 01/01/2022
                </Text>
              </View>
              <View style={styles.extraInfoWrap}>
                <FontAwesome5
                  name={'chair'}
                  size={12}
                  style={styles.extraInfoIcon}
                />
                <Text style={styles.extraInfoText} numberOfLines={1}>
                  3/7
                </Text>
              </View>
              <Text>{renderStar(item.stars)}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  itemOp: {
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    opacity: 0.6,
  },
  item_row: {
    justifyContent: 'center',
    marginBottom: 5,
  },
  item_body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'justify',
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  rightContent: {
    flex: 1,
  },
  subtitle: {
    color: '#5c5757',
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    flex: 3,
    textAlign: 'justify',
  },
  extraInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    fontFamily: 'Roboto-Medium',
    borderColor: '#cccccc',
    paddingTop: 5,
    paddingBottom: 5,
  },
  extraInfoText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    fontStyle: 'italic',
  },
  extraInfoWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  extraInfoIcon: {
    marginRight: 5,
  },
  carImage: {
    padding: 5,
    flex: 1,
  },
  image: {
    width: '100%',
    minHeight: 60,
    marginLeft: 10,
  },
});
