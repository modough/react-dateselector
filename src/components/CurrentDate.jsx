import '../css/currentDate.css';
import PropTypes from 'prop-types'
import { monthsInLetter } from '../data/monthInLetter';
/**
 * A component that displays the current date in a specific format based on the provided props.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.month - The numeric representation of the month (0-11).
 * @param {number} props.year - The year.
 * @param {string} props.locale - The locale in the format "language-country".
 * @returns {JSX.Element} The rendered current date component.
 * @throws {Error} Throws an error if the month or year values are out of range or invalid.
 *
 * @example
 * // Example usage of CurrentDate component:
 * <CurrentDate month={5} year={2023} locale="en-US" />
 */

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