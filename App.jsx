import { useState } from 'react'
import DayPicker from './src/components/DayPicker'
import PropTypes from 'prop-types'

function App({ locale = 'en-US', color = 'green' }) {
  const [clickedDate, setClickedDate] = useState({})
  return (
    <DayPicker
      locale={locale}
      color={color}
      clickedDate={clickedDate}
      setClickedDate={setClickedDate}
    />
  )
}
App.propTypes = {
  clickedDate: PropTypes.object,
  setClickedDate: PropTypes.func,
  locale: PropTypes.string,
  color: PropTypes.string,
}
export default App
