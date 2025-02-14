import { createSlice } from '@reduxjs/toolkit';
import { generateUuidv4 } from '@/helpers/utils';

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: {
        pages: []
    },
    reducers: {
        addPage: (state, { payload }) => {
            state.pages.push({ id: generateUuidv4(), ...payload });
        },
        updatePage: (state, { payload }) => {
            const pageIndex = state.pages.findIndex(page => page.id === payload.id);
            state.pages[pageIndex] = payload
        },
        removePage: (state, { payload }) => {
            state.pages = state.pages.filter(page => page.id !== payload);
        }
    }
});


export const { addPage, updatePage, removePage } = invoiceSlice.actions;

export default invoiceSlice.reducer;
