import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const InvoiceDatepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker className={`invoice-control`} selected={startDate} onChange={(date) => setStartDate(date)} />
    );
}

export default InvoiceDatepicker
