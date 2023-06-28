import { Fragment, useEffect, useRef, useState } from 'react';
import format from 'date-fns/format';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../css/dayPicker.css';
const DayPicker = () => {
    const [selectedDay, setSelectedDay] = useState('');

    const handleSelect = (day) => {
        console.log(day);
    };


    return (

        <Calendar
            date={new Date()}
            onChange={(day) => handleSelect(day)}
        />

    );
};
export default DayPicker;