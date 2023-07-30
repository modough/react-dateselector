import '../css/daysInMonth.css';
import PropTypes from 'prop-types'
import { date, currentMonth, currentYear } from '../utils/dateFormat';
import { useEffect, useState } from 'react';

function DaysInMonth({ setIsClicked, month, year }) {
    let arrayDate = [];
    const thisMonthFirstDateIndex = new Date(year, month, 1).getDay();
    const thisMonthLastDate = new Date(year, month + 1, 0).getDate();
    const thisMonthLastDateIndex = new Date(year, month, thisMonthLastDate).getDay();
    const lastMonthLastDate = new Date(year, month, 0).getDate();
    const [clickedDate, setClickedDate] = useState({ day: null, month, year });
    const handleClick = (i) => {
        setClickedDate({ day: i, month: month + 1, year });
        localStorage.setItem('day', `${i}/${month + 1}/${year}`)
    };

    useEffect(() => {
        console.log(clickedDate)
        if (setIsClicked) {
            clickedDate
        }
    }, [clickedDate, setIsClicked]);

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
        const todayClassName = i === date.getDate() &&
            month === currentMonth &&
            year === currentYear ?
            'active' : ''
        const clickedClassName = i === clickedDate.day &&
            month === clickedDate.month - 1 &&
            year === clickedDate.year ?
            'clicked' : ''
        arrayDate.push(
            <li
                key={i}
                className={`${todayClassName} ${clickedClassName}`}
                onClick={() => {
                    handleClick(i)
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
    setIsClicked: PropTypes.object,
}
export default DaysInMonth