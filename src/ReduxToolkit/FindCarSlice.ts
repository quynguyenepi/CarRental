import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  availableCars: [
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728950e',
      title: '7h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội xe đẹp, cốp rộng, bỏ đồ thoải mái giá cả phải chăng 7h sáng có xe từ thanh hóa về hà nội xe đẹp, cốp rộng, bỏ đồ thoải mái giá cả phải chăng',
      stars: 1,
      booked: false,
      url: 'https://cdn.carbuzz.com/gallery-images/300x200/436000/900/436915.jpg',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728951e',
      title: '8h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 2,
      booked: true,
      url: 'https://cdn.carbuzz.com/gallery-images/300x200/436000/900/436915.jpg',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728952e',
      title: '9h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 3,
      booked: false,
      url: 'https://cdn.carbuzz.com/gallery-images/300x200/436000/900/436915.jpg',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728953e',
      title: '7h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 4,
      booked: false,
      url: 'https://cdn.carbuzz.com/gallery-images/300x200/436000/900/436915.jpg',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728954e',

      title: '8h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 5,
      booked: true,
      url: 'https://cdn.carbuzz.com/gallery-images/300x200/436000/900/436915.jpg',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728955e',

      title: '9h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 3,
      booked: false,
      url: 'https://cdn.carbuzz.com/gallery-images/300x200/436000/900/436915.jpg',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728956e',

      title: '7h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 1,
      booked: false,
      url: 'https://cdn.carbuzz.com/gallery-images/300x200/436000/900/436915.jpg',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728957e',

      title: '8h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 2,
      booked: true,
      url: 'https://www.autotrader.com/content/dam/autotrader/homepage/styles/new_default_desk_style_sedan@2x.png',
    },
    {
      id: '0f8fad5b-d9cb-469f-a165-70867728958e',

      title: '9h sáng có xe từ thanh hóa về hà nội',
      time: '01/01/2021',
      from: 'Thanh hóa',
      to: 'Hà Nội',
      seatAvailable: 4,
      totalSeats: 7,
      seatPrice: 200000,
      totalPrice: 1000000,
      desc: '7h sáng có xe từ thanh hóa về hà nội',
      stars: 3,
      booked: false,
      url: 'https://www.autotrader.com/content/dam/autotrader/homepage/styles/new_default_desk_style_sedan@2x.png',
    },
  ],
  isShowRentalCarsModal: false,
};

export const findCarSlice = createSlice({
  name: 'findCar',
  initialState,
  reducers: {
    setAvailableCar: (state, action) => {
      state.availableCars = action.payload;
    },
    showRentalCarsModal: (state, action) => {
      state.isShowRentalCarsModal = action.payload;
    },
    rentalCar: (state, action) => {
      const {id, numberSeat, isBookAllCar} = action.payload;
      const index = state.availableCars.findIndex(car => car.id === id);
      if (isBookAllCar) {
        state.availableCars[index].seatAvailable = 0;
        state.availableCars[index].booked = true;
      } else {
        state.availableCars[index].seatAvailable =
          state.availableCars[index].seatAvailable - numberSeat;
      }
      state.availableCars = action.payload;
    },
  },
});

export const {setAvailableCar, showRentalCarsModal, rentalCar} =
  findCarSlice.actions;

export const selectState = state => state.findCar;

export default findCarSlice.reducer;
