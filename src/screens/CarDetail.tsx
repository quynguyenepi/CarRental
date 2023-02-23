import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Starts from '../Components/Starts';
import CustomButton from '../Components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {selectState, showRentalCarsModal} from '../ReduxToolkit/FindCarSlice';
import CustomModal from '../Components/CustomModal';
export default function CarDetail(props) {
  const dispatch = useDispatch();
  const {params} = props.route;
  const {isShowRentalCarsModal} = useSelector(selectState);
  const renderStar = (stars: number) => {
    let xhtml = [];
    for (let index = 1; index <= stars; index++) {
      xhtml.push(<Starts key={index.toString()} size={15} />);
    }
    return xhtml;
  };
  const onShowModalHandler = (isShow: boolean) => {
    dispatch(showRentalCarsModal(isShow));
  };
  const onBookCarHandler = (isShow: boolean) => {
    dispatch(showRentalCarsModal(isShow));
  };
  return (
    <View style={styles.body}>
      <CustomModal
        isShowModal={isShowRentalCarsModal}
        setShowModal={() => onShowModalHandler(false)}
        onOkButtonClick={onBookCarHandler}
      />
      {params ? (
        <View style={styles.content}>
          <Text style={styles.rowTitle} numberOfLines={2}>
            {params.title}
          </Text>
          <View style={styles.rowContent}>
            <Text style={styles.title}>Đi từ:</Text>
            <Text style={styles.des}>{params.from}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.title}>Đi đến:</Text>
            <Text style={styles.des}>{params.to}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.title}>Thời gian:</Text>
            <Text style={styles.des}>{params.time}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.title}>Số ghế trống:</Text>
            <Text style={styles.des}>
              {params.seatAvailable}/{params.totalSeats}
            </Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.title}>Giá/Ghế:</Text>
            <Text style={styles.des}>{params.seatPrice} VND</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.title}>Giá bao xe:</Text>
            <Text style={styles.des}>{params.totalPrice} VND</Text>
          </View>
          <View style={styles.rowContentDes}>
            <Text style={styles.title}>Chi tiết:</Text>
            <Text style={styles.des}>{params.desc}</Text>
          </View>
          <View style={styles.rowStar}>{renderStar(params.stars)}</View>
          <View style={styles.rowStar}>
            <CustomButton
              title="Đặt xe"
              color="#2758a6"
              onPressFunction={() => onShowModalHandler(true)}
            />
          </View>
        </View>
      ) : (
        <View style={styles.noInfo}>
          <Text>Không có thông tin</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    fontFamily: 'Roboto-Medium',
  },
  content: {
    padding: 5,
  },
  rowContent: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  rowTitle: {
    fontWeight: '500',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Medium',
  },
  title: {
    fontWeight: '500',
    marginRight: 5,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  des: {
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'Roboto-Medium',
    textAlign: 'justify',
  },
  rowContentDes: {
    flexDirection: 'column',
  },
  rowStar: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
