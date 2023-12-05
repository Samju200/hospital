import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  postsPerPage: 10,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,

  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage -= 1;
    },
  },
});

export const { nextPage, previousPage } = paginationSlice.actions;

export const selectCount = (state) => state.pagination.currentPage;
export default paginationSlice.reducer;
