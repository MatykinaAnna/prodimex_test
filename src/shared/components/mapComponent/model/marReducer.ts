import { createSlice } from '@reduxjs/toolkit';

const mapReducer = createSlice({
  name: 'loginReducer',
  initialState: {
    //center: [55.7, 37.5],
    center: [38.2501685315366, -100.31928695756785],
    zoom: 13,
  },
  reducers: {
    setCenter(state, action) {
      state.center = action.payload;
    },
    setZoom(state, action) {
      state.zoom = action.payload;
    },
  },
});
export default mapReducer.reducer;
export const { setCenter, setZoom } = mapReducer.actions;
