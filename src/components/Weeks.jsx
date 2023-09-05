import { daysInLetter } from "../data/daysInLetter"
import PropTypes from 'prop-types'
import '../css/weeks.css'

/**
 * Weeks component for displaying the days of the week.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.locale - The locale in the format "language-country".
 * @param {string} props.color - The color for the day names.
 * @returns {JSX.Element} The rendered Weeks component.
 *
 * @example
 * // Example usage of Weeks component:
 * <Weeks
 *   locale="en-US"
 *   color="#3498db"
 * />
 */
function Weeks({ locale, color }) {
    const lang = locale.split('-')[0]

    return (
        <ul className='weeks' >
            {daysInLetter[lang].map((day) => {
                return <li key={day} style={{ color }}>{day}</li>
            })}
        </ul>
    )
}
Weeks.propTypes = {
    locale: PropTypes.string,
    color: PropTypes.string,
}
export default Weeks