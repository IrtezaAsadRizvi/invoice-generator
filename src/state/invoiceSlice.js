import { createSlice } from '@reduxjs/toolkit';
import { generateUuidv4 } from '@/helpers/utils';

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: {
        pages: [],
        currency: {
            currency: 'United States Dollar',
            currencyCode: 'USD',
            currencySymbol: '$',
            alignment: 'left',
        }
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
        },
        setCurrency: (state, { payload }) => {
            state.currency = payload
        }
    }
});


export const { addPage, updatePage, removePage, setCurrency } = invoiceSlice.actions;

export default invoiceSlice.reducer;
