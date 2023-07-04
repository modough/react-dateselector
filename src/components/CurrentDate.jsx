import '../css/currentDate.css';
import { monthsInLetter } from '../data/monthInLetter';
import { month, year } from '../utils/dateFormat';
function CurrentDate() {

    return (
        <div className='current-date'>{`${monthsInLetter[month]} ${year}`}</div>
    )
}

export default CurrentDate