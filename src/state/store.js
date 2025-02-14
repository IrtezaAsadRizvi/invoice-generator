import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import invoiceReducer from './invoiceSlice'

export default configureStore({
    reducer: {
        ui: uiReducer,
        invoice: invoiceReducer
    },
})