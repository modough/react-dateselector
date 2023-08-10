import DayPicker from './src/components/DayPicker'
import PropTypes from 'prop-types'

function App({ locale = 'en-US', clickedDate, setClickedDate }) {
  return (
    <DayPicker
      locale={locale}
      clickedDate={clickedDate}
      setClickedDate={setClickedDate}
    />
  )
}
App.propTypes = {
  clickedDate: PropTypes.object,
  setClickedDate: PropTypes.func,
  locale: PropTypes.string
}
export default App
