import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../css/dayPicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CurrentDate from './CurrentDate';
import DaysInMonth from './DaysInMonth';
import { useState } from 'react';
import { currentMonth, currentYear } from '../utils/dateFormat';
import Weeks from './Weeks';
const DayPicker = () => {
    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)
    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
            console.log(month)
        } else {
            setMonth(month + 1)
            console.log(month)
        }
    }
    const handlePrevMonth = () => {
        if (month === 0) {
            setYear(year - 1)
            setMonth(11)
        } else {
            setMonth(month - 1)
        }
    }
    return (
        <div className='daypicker-wrapper'>
            <div className='header'>
                <CurrentDate month={month} year={year} />
                <div className='icons'>
                    <FontAwesomeIcon onClick={handlePrevMonth} icon={faChevronLeft} />
                    <FontAwesomeIcon onClick={handleNextMonth} icon={faChevronRight} />
                </div>
            </div>
            <div className='calendar'>
                <Weeks />
                <DaysInMonth />
            </div>
        </div>
    );
};
export default DayPicker;