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

/**
 * DayPicker component for displaying and navigating through calendar days.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Date} props.clickedDate - The currently clicked date.
 * @param {function} props.setClickedDate - A function to update the clicked date.
 * @param {string} props.locale - The locale in the format "language-country".
 * @param {string} props.color - The background color for the header.
 * @param {string} props.todayBackground - The background color for today's date.
 * @returns {JSX.Element} The rendered DayPicker component.
 *
 * @example
 * // Example usage of DayPicker component:
 * <DayPicker
 *   clickedDate={selectedDate}
 *   setClickedDate={handleDateClick}
 *   locale="en-US"
 *   color="#3498db"
 *   todayBackground="#f39c12"
 * />
 */
const DayPicker = ({ clickedDate, setClickedDate, locale, color, todayBackground }) => {
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
            <div className='header' style={{ backgroundColor: color }}>
                <div className='icons'>
                    <img
                        className='leftArrow-year' onClick={displayPrevYear}
                        src={doubleArrow}
                        alt='arrow for previous year'
                    />
                    <img
                        className='leftArrow-month' onClick={displayPrevMonth}
                        src={arrow}
                        alt='arrow for previous month'
                    />
                    <CurrentDate
                        locale={locale}
                        month={today ? currentMonth : month}
                        year={today ? currentYear : year}
                    />
                    <img
                        className='rightArrow-month' onClick={displayNextMonth}
                        src={arrow}
                        alt='arrow for next month'
                    />
                    <img
                        className='rightArrow-year' onClick={displayNextYear}
                        src={doubleArrow}
                        alt='arrow for next month'
                    />
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
                <Weeks locale={locale} color={color} />
                <DaysInMonth
                    clickedDate={clickedDate}
                    setClickedDate={setClickedDate}
                    month={today ? currentMonth : month}
                    year={today ? currentYear : year}
                    color={color}
                    todayBackground={todayBackground}
                />
            </div>
        </div>
    );
};
DayPicker.propTypes = {
    clickedDate: PropTypes.object,
    setClickedDate: PropTypes.func,
    locale: PropTypes.string,
    color: PropTypes.string,
    todayBackground: PropTypes.string,
}
export default DayPicker;