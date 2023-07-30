import DayPicker from './src/components/DayPicker'
import PropTypes from 'prop-types'

function App({ setIsClicked }) {
  return (
    <DayPicker setIsClicked={setIsClicked} />
  )
}
App.propTypes = {
  setIsClicked: PropTypes.func,
}
export default App
