import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const InvoiceDatepicker = ({onChange, align='left'}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker className={`invoice-control ${align==='right' && 'text-end'}`} selected={startDate} onChange={(date) => onChange(date)} />
    );
}

export default InvoiceDatepicker
