import { createSlice } from '@reduxjs/toolkit';

interface r {
  arrayBranch: {
    name: string;
    id: number;
    parent: boolean;
    checked: boolean;
    center: [];
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
        center: [],
      },

      {
        name: 'АК Липецк',
        id: 1,
        parent: false,
        checked: true,
        center: [52.61375394225112, 39.6002453557231],
      },

      {
        name: 'АК Семилукский',
        id: 2,
        parent: false,
        checked: false,
        center: [51.85917025590464, 38.72132636135295],
      },

      {
        name: 'АК Тамбов',
        id: 3,
        parent: false,
        checked: false,
        center: [52.7332343342239, 41.44152917444044],
      },
      {
        name: 'УК "Курск Агро"',
        id: 4,
        parent: true,
        checked: false,
        center: [],
      },

      {
        name: 'Филиал 1',
        id: 5,
        parent: false,
        checked: false,
        center: [51.79465416055213, 36.16908405742973],
      },

      {
        name: 'Филиал 2',
        id: 6,
        parent: false,
        checked: false,
        center: [51.67707785419817, 36.07913349511956],
      },

      {
        name: 'Филиал 3',
        id: 7,
        parent: false,
        checked: false,
        center: [51.799750005734225, 36.34108875808864],
      },
      {
        name: 'Агродивизион',
        id: 8,
        parent: true,
        checked: false,
        center: [],
      },

      {
        name: 'Филиал 1',
        id: 9,
        parent: false,
        checked: false,
        center: [51.819997627260896, 39.12990635951047],
      },

      {
        name: 'Филиал 2',
        id: 10,
        parent: false,
        checked: false,
        center: [51.66353322412317, 39.023476304868666],
      },

      {
        name: 'Филиал 3',
        id: 7,
        parent: false,
        checked: false,
        center: [51.74948565594524, 39.53159398509406],
      },
    ],
  } as r,
  reducers: {
    setCheck(state, action: { payload: number }) {
      let index = state.arrayBranch.findIndex((item) => {
        return item.id === action.payload;
      });
      state.arrayBranch[index].checked = !state.arrayBranch[index].checked;
      try {
        if (state.arrayBranch[index].parent) {
          let i = index + 1;
          while (!state.arrayBranch[i].parent && i < state.arrayBranch.length) {
            state.arrayBranch[i].checked = state.arrayBranch[index].checked;
            i++;
          }
        }
      } catch (error) {
        console.log(state.arrayBranch[index]);
      }
    },
    setAllOprionCheck(state, action: { payload: boolean }) {
      state.arrayBranch.forEach((item) => {
        item.checked = action.payload;
      });
    },
  },
});
export default reducer.reducer;
export const { setCheck, setAllOprionCheck } = reducer.actions;
