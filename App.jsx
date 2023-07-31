import { useState } from 'react'
import DayPicker from './src/components/DayPicker'
import PropTypes from 'prop-types'

function App({ locale = 'en-us' }) {
  const [clickedDate, setClickedDate] = useState()
  return (
    <DayPicker locale={locale} clickedDate={clickedDate} setClickedDate={setClickedDate} />
  )
}
App.propTypes = {
  clickedDate: PropTypes.string,
  setClickedDate: PropTypes.func,
  locale: PropTypes.string
}
export default App
