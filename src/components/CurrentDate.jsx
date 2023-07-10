import '../css/currentDate.css';
import PropTypes from 'prop-types'
import { monthsInLetter } from '../data/monthInLetter';

function CurrentDate({ month, year }) {
    return (
        <div className='current-date'>
            {`${monthsInLetter[month]} ${year}`}
        </div>
    )
}
CurrentDate.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
}
export default CurrentDate