import { type PayloadAction, createSlice } from '@reduxjs/toolkit';





export const themeSlice = createSlice({
   name: 'theme',
   initialState: 'ligth',
  //  initialState: 'dark',
   reducers: {
    setTheme: (_:string, action: PayloadAction<string>) => {
      return  action.payload;
    },


  },
},
);


//Actions
export const { setTheme } = themeSlice.actions;