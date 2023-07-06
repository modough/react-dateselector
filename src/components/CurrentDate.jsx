import '../css/currentDate.css';
import { monthsInLetter } from '../data/monthInLetter';
function CurrentDate({ month, year }) {

    return (
        <div className='current-date'>
            {`${monthsInLetter[month]} ${year}`}
        </div>
    )
}

export default CurrentDate