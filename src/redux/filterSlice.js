import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constantsFilter";


const filterInitialState = {
    status: statusFilters.all,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filterInitialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        },
    },
});

export const {setStatusFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;