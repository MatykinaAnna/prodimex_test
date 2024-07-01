import { createSlice } from '@reduxjs/toolkit';

const mapReducer = createSlice({
  name: 'loginReducer',
  initialState: {
    center: [55.7, 37.5],
  },
  reducers: {
    setCenter(state, action) {
      state.center = action.payload;
    },
  },
});
export default mapReducer.reducer;
export const { setCenter } = mapReducer.actions;
