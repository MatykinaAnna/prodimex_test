import { createSlice } from '@reduxjs/toolkit';

interface UserItem {
  login: string;
  password: string;
  role: number;
}

interface state_login {
  users: UserItem[];
}

const loginReducer = createSlice({
  name: 'loginReducer',
  initialState: {
    users: [
      {
        login: 'login1',
        password: 'password1',
        role: 1,
      },
    ],
  } as state_login,
  reducers: {},
});
export default loginReducer.reducer;
export const {} = loginReducer.actions;
