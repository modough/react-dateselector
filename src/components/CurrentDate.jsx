import '../css/currentDate.css';
import PropTypes from 'prop-types'
import { monthsInLetter } from '../data/monthInLetter';

function CurrentDate({ month, year, locale }) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const monthIndex = month.toLocaleDateString(locale, options)
    const formattedYear = year.toLocaleDateString(locale, options)
    const lang = locale.split('-')[0]

    return (
        <div className='current-date'>
            {`${monthsInLetter[lang][monthIndex]} ${formattedYear}`}
        </div>
    )
}
CurrentDate.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
    locale: PropTypes.string
}
export default CurrentDate