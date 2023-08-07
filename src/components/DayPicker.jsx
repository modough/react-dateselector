import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../css/dayPicker.css';
import CurrentDate from './CurrentDate';
import DaysInMonth from './DaysInMonth';
import { useState } from 'react';
import { currentMonth, currentYear, date } from '../utils/dateFormat';
import Weeks from './Weeks';
import PropTypes from 'prop-types'
import arrow from '../assets/arrow-34.svg';
import doubleArrow from '../assets/left-double-arrow.svg';


const DayPicker = ({ clickedDate, setClickedDate, locale }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateToLocalDateString = date.toLocaleDateString(locale, options).split(',').join(' ')
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
                    <button className='leftArrow-year' onClick={displayPrevYear}>
                        <img
                            src={doubleArrow}
                            alt='arrow for previous year'
                        />
                    </button>
                    <button className='leftArrow-month' onClick={displayPrevMonth}>
                        <img
                            src={arrow}
                            alt='arrow for previous month'
                        />
                    </button>

                    <CurrentDate
                        month={today ? currentMonth : month}
                        year={today ? currentYear : year}
                    />
                    <button className='rightArrow-month' onClick={displayNextMonth}>
                        <img
                            src={arrow}
                            alt='arrow for next month'
                        />
                    </button>
                    <button className='rightArrow-year' onClick={displayNextYear}>
                        <img
                            src={doubleArrow}
                            alt='arrow for next month'
                        />
                    </button>
                </div>
                <div className='today-date'
                    onClick={(e) => {
                        e.preventDefault();
                        handleToday()
                    }}>
                    <button>{dateToLocalDateString}</button>
                </div>
            </div>
            <div className='calendar'>
                <Weeks />
                <DaysInMonth
                    clickedDate={clickedDate}
                    setClickedDate={setClickedDate}
                    month={today ? currentMonth : month}
                    year={today ? currentYear : year}
                />
            </div>
        </div>
    );
};
DayPicker.propTypes = {
    clickedDate: PropTypes.object,
    setClickedDate: PropTypes.func,
    locale: PropTypes.string
}
export default DayPicker;