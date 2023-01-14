import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   coords: null,
   loading: false,
   error: null
};


export const coordsSlice = createSlice({
   name: 'coorSlice',
   initialState,
   reducers: {
      getCoords: (state) => {
         state.loading = true;
      },
      getCoordsSuccess: (state, action) => {
         state.loading = false;
         state.coords = action.payload;
      },
      getCoordsFailure: (state, action) => {
         state.loading = false;
         state.error = action.payload;
      }
   }
});

export const { getCoords, getCoordsSuccess, getCoordsFailure } = coordsSlice.actions;

export default coordsSlice.reducer;

export const getCoordsReducerType = (payload) => ({ type: coordsSlice.getCoords.action.type, payload });