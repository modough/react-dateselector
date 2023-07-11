import '../css/daysInMonth.css';
import PropTypes from 'prop-types'
import { date, currentMonth, currentYear } from '../utils/dateFormat';

function DaysInMonth({ month, year }) {
    let arrayDate = [];
    const thisMonthFirstDateIndex = new Date(year, month, 1).getDay();
    const thisMonthLastDate = new Date(year, month + 1, 0).getDate();
    const thisMonthLastDateIndex = new Date(year, month, thisMonthLastDate).getDay();
    const lastMonthLastDate = new Date(year, month, 0).getDate();
    const handleClickDate = (e) => {
        const clickedDate = `${e.target.innerHTML}/${month + 1}/${year}`
        e.target.className = 'clicked'
        return clickedDate
    }

    //creating array with previous month last days
    for (let i = thisMonthFirstDateIndex; i > 0; i--) {
        arrayDate.push(
            <li
                key={1 - lastMonthLastDate - i}
                className='inactive'
            >
                {lastMonthLastDate - i + 1}
            </li>
        )
    }

    //creating array with this month days
    for (let i = 1; i <= thisMonthLastDate; i++) {
        const today = i === date.getDate() &&
            month === currentMonth &&
            year === currentYear ?
            'active' : ''
        arrayDate.push(
            <li
                key={thisMonthLastDate + i}
                className={`${today}`}
                onClick={(e) =>
                    console.log(handleClickDate(e))
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
                key={i - thisMonthLastDateIndex + 1}
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
}
export default DaysInMonth