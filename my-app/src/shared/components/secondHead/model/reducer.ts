import { createSlice } from '@reduxjs/toolkit';

interface r {
  arrayBranch: {
    name: string;
    id: number;
    parent: boolean;
    checked: boolean;
  }[];
}

const reducer = createSlice({
  name: 'loginReducer',
  initialState: {
    arrayBranch: [
      {
        name: 'УК "Продимекс Агро"',
        id: 0,
        parent: true,
        checked: false,
      },

      { name: 'АК Липецк', id: 1, parent: false, checked: true },

      { name: 'АК Семилукский', id: 2, parent: false, checked: false },

      {
        name: 'АК Тамбов',
        id: 3,
        parent: false,
        checked: false,
      },
      {
        name: 'УК "Курск Агро"',
        id: 4,
        parent: true,
        checked: false,
      },

      { name: 'Филиал 1', id: 5, parent: false, checked: false },

      { name: 'Филиал 2', id: 6, parent: false, checked: false },

      {
        name: 'Филиал 3',
        id: 7,
        parent: false,
        checked: false,
      },
      {
        name: 'Агродивизион',
        id: 8,
        parent: true,
        checked: false,
      },

      { name: 'Филиал 1', id: 9, parent: false, checked: false },

      { name: 'Филиал 2', id: 10, parent: false, checked: false },

      {
        name: 'Филиал 3',
        id: 7,
        parent: false,
        checked: false,
      },
    ],
  } as r,
  reducers: {
    setCheck(state, action: { payload: number }) {
      let index = state.arrayBranch.findIndex((item) => {
        return item.id === action.payload;
      });
      state.arrayBranch[index].checked = !state.arrayBranch[index].checked;
    },
  },
});
export default reducer.reducer;
export const { setCheck } = reducer.actions;
