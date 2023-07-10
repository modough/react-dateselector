import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../css/dayPicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CurrentDate from './CurrentDate';
import DaysInMonth from './DaysInMonth';
import { useState } from 'react';
import { currentMonth, currentYear, date } from '../utils/dateFormat';
import Weeks from './Weeks';

const DayPicker = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const dateToLocalDateString = date.toLocaleDateString('en-us', options).split('/').join(' ')
    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)

    const displayNextMonth = () => {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
        } else {
            setMonth(month + 1)
        }
    }
    const displayPrevMonth = () => {
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
                <div className='icons'>
                    <FontAwesomeIcon onClick={displayPrevMonth} icon={faChevronLeft} />
                    <CurrentDate month={month} year={year} />
                    <FontAwesomeIcon onClick={displayNextMonth} icon={faChevronRight} />
                </div>
                <div className='today-date'>
                    {dateToLocalDateString}
                </div>
            </div>
            <div className='calendar'>
                <Weeks />
                <DaysInMonth month={month} year={year} />
            </div>
        </div>
    );
};
export default DayPicker;