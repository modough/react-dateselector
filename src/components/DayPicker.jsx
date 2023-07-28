import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../css/dayPicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faFastBackward, faFastForward } from '@fortawesome/free-solid-svg-icons'
import CurrentDate from './CurrentDate';
import DaysInMonth from './DaysInMonth';
import { useState } from 'react';
import { currentMonth, currentYear, date } from '../utils/dateFormat';
import Weeks from './Weeks';

const DayPicker = (setIsClicked) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateToLocalDateString = date.toLocaleDateString('en-us', options).split(',').join(' ')
    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)
    const [today, setToday] = useState()

    const handleToday = () => {
        setMonth(currentMonth)
        setYear(currentYear)
        setToday(date)
    }
    const displayNextMonth = () => {
        setToday(null)
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
        } else {
            setMonth(month + 1)
        }
    }
    const displayPrevMonth = () => {
        setToday(null)
        if (month === 0) {
            setYear(year - 1)
            setMonth(11)
        } else {
            setMonth(month - 1)
        }
    }
    const displayNextYear = () => {
        setToday(null)
        setYear(year + 1)
    }
    const displayPrevYear = () => {
        setToday(null)
        setYear(year - 1)
    }

    return (
        <div className='daypicker-wrapper'>
            <div className='header'>
                <div className='icons'>
                    <FontAwesomeIcon
                        className='year-icon'
                        onClick={displayPrevYear}
                        icon={faFastBackward}
                    />
                    <FontAwesomeIcon onClick={displayPrevMonth} icon={faChevronLeft} />
                    <CurrentDate
                        month={today ? currentMonth : month}
                        year={today ? currentYear : year}
                    />
                    <FontAwesomeIcon onClick={displayNextMonth} icon={faChevronRight} />
                    <FontAwesomeIcon
                        className='year-icon'
                        onClick={displayNextYear}
                        icon={faFastForward}
                    />
                </div>
                <div className='today-date' onClick={handleToday}>
                    <button>{dateToLocalDateString}</button>
                </div>
            </div>
            <div className='calendar'>
                <Weeks />
                <DaysInMonth
                    setIsClicked={setIsClicked}
                    month={today ? currentMonth : month}
                    year={today ? currentYear : year}
                />
            </div>
        </div>
    );
};
export default DayPicker;