import '../css/currentDate.css';
import PropTypes from 'prop-types'
import { monthsInLetter } from '../data/monthInLetter';

function CurrentDate({ month, year, locale }) {
    const lang = locale.split('-')[0]

    return (
        <div className='current-date'>
            {`${monthsInLetter[lang][month]} ${year}`}
        </div>
    )
}
CurrentDate.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
    locale: PropTypes.string
}
export default CurrentDate