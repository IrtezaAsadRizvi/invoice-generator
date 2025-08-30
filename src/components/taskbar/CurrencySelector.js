"use client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "@/state/invoiceSlice";
import { SUPPORTED_CURRENCIES } from "@/config/currency";
import IconCurrency from "../vector/IconCurrency";
import Dropdown from "../common/Dropdown"

const CurrencySelector = () => {
    const dispatch = useDispatch()
    const currentCurrency = useSelector((state) => state.invoice.currency)

    const changeCurrency = (value) => {
        const currency = SUPPORTED_CURRENCIES.find(currency => currency.currencyCode === value)
        dispatch(setCurrency(currency))
    };

    return (
        <Dropdown 
            title={() => <IconCurrency/>} 
            items={SUPPORTED_CURRENCIES.map(({currencySymbol, currencyCode}) => ({text: `${currencySymbol} ${currencyCode}`, value: currencyCode}))}
            initialValue={currentCurrency.currencyCode}
            onSelect={(e) => {changeCurrency(e)}}/>
    );
};

export default CurrencySelector;
