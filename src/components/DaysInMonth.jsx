import '../css/daysInMonth.css';
import PropTypes from 'prop-types'
import { date, currentMonth, currentYear } from '../utils/dateFormat';

/**
 * DaysInMonth component for displaying the days of a specific month.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.setClickedDate - A function to update the clicked date.
 * @param {Object} props.clickedDate - The date that has been clicked.
 * @param {number} props.month - The month (0-11) to display.
 * @param {number} props.year - The year to display.
 * @param {string} props.todayBackground - The background color for today's date.
 * @returns {JSX.Element} The rendered DaysInMonth component.
 *
 * @example
 * // Example usage of DaysInMonth component:
 * <DaysInMonth
 *   setClickedDate={handleDateClick}
 *   clickedDate={selectedDate}
 *   month={currentMonth}
 *   year={currentYear}
 *   todayBackground="#f39c12"
 * />
 */
function DaysInMonth({ setClickedDate, clickedDate, month, year, todayBackground }) {
    let arrayDate = [];
    const thisMonthFirstDateIndex = new Date(year, month, 1).getDay();
    const thisMonthLastDate = new Date(year, month + 1, 0).getDate();
    const thisMonthLastDateIndex = new Date(year, month, thisMonthLastDate).getDay();
    const lastMonthLastDate = new Date(year, month, 0).getDate();

    //creating array with previous month last days
    for (let i = thisMonthFirstDateIndex; i > 0; i--) {
        arrayDate.push(
            <li
                key={`prev-${i}`}
                className='inactive'
            >
                {lastMonthLastDate - i + 1}
            </li>
        )
    }

    //creating array with this month days
    for (let i = 1; i <= thisMonthLastDate; i++) {
        const monthFormat = month + 1 <= 9 ? `0${month + 1}` : `${month + 1}`
        const dayFormat = i <= 9 ? `0${i}` : `${i}`
        const todayClassName = i === date.getDate() &&
            month === currentMonth &&
            year === currentYear ?
            `active-${todayBackground}` : ''
        const clickedClassName = dayFormat === clickedDate.day &&
            monthFormat === clickedDate.month &&
            year === clickedDate.year ?
            'clicked' : ''

        arrayDate.push(
            <li
                key={i}
                className={`${todayClassName} ${clickedClassName}`}
                onClick={(e) => {
                    e.preventDefault();
                    setClickedDate({ day: dayFormat, month: monthFormat, year: year });
                }
                }
            >
                {i}
            </li>
        )
    }
    //creating array with next month first days
    for (let i = thisMonthLastDateIndex; i < 6; i++) {
        arrayDate.push(
            <li
                key={`next-${i}`}
                className='inactive'
            >
                {i - thisMonthLastDateIndex + 1}
            </li>
        )
    }

    return (
        <ul className='days'>
            {arrayDate}
        </ul>
    )
}
DaysInMonth.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
    clickedDate: PropTypes.object,
    todayBackground: PropTypes.string,
    setClickedDate: PropTypes.func,
}
export default DaysInMonth