import '../css/daysInMonth.css';
import PropTypes from 'prop-types'
import { date, currentMonth, currentYear } from '../utils/dateFormat';


function DaysInMonth({ setClickedDate, clickedDate, month, year }) {
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
            'active' : ''
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
    setClickedDate: PropTypes.func,
}
export default DaysInMonth