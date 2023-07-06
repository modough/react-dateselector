import '../css/daysInMonth.css';
import PropTypes from 'prop-types'
import { date } from '../utils/dateFormat';
function DaysInMonth({ month, year }) {
    const thisMonthLastDate = new Date(year, month + 1, 0).getDate();
    const lastMonthLastDate = new Date(year, month, 0).getDate();
    const thisMonthFirstDay = new Date(year, month, 1).getDay();
    const thisMonthLastDay = new Date(year, month, thisMonthLastDate).getDay();

    const daysArray = Array
        .from({ length: thisMonthLastDate }, (_, i) => i + 1)
        .map((day) => {
            const today = day === date.getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear() ?
                'active' : ''
            return (
                <li key={day} className={`${today}`} >
                    {day}
                </li>
            )
        }
        )
    const inactivePrevDaysArray = Array
        .from({ length: thisMonthFirstDay }, (_, i) => i + 1)
        .map((day) =>
            <li key={day} className="inactive">
                {lastMonthLastDate - day + 1}
            </li>
        )
    const inactiveNextDaysArray = Array
        .from({ length: thisMonthLastDay }, (_, i) => i + 1)
        .map((day) =>
            <li key={day} className="inactive">
                {(day - thisMonthLastDay - 1) * (-1)}
            </li>
        )


    return (
        <ul className='days'>
            {[inactivePrevDaysArray.reverse(),
                daysArray, inactiveNextDaysArray.reverse()]
            }
        </ul>
    )
}
DaysInMonth.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
}
export default DaysInMonth