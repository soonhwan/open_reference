import { useState, useRef } from 'react'
import Calendar from 'rc-calendar'
import Picker from './Picker'  
import moment from 'moment'
import 'moment/locale/ko'
import PropTypes from 'prop-types'

const DatePicker = ({defaultValue = null, inputWidth, inputHeight, onChange}) => {
  const now = moment()
  now.locale('ko').utcOffset(0)
  const format = 'YYYY-MM-DD HH:mm:ss'

  const calendarContainerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [value, setValue] = useState(defaultValue) // null 로 설정하면 input 값이 비어져있음

  const getFormat = (time) => time ? format : 'YYYY-MM-DD'

  function disabledTime(date) {
    if (date && (date.date() === 15)) {
      return {
        disabledHours() {
          return [3, 4];
        },
      };
    }
    return {
      disabledHours() {
        return [1, 2];
      },
    };
  }
  
  function disabledDate(current) {
    if (!current) return false;
    const date = moment();
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.valueOf() < date.valueOf();
  }
  
  const onChangeCalendar = (value) => {
    //console.log('DatePicker change: ', (value && value.format(format)));
    setValue(value);
    setOpen(false);
    if(onChange) onChange(value);
  }
  const onOpenChangeCalendar = (open) => {
    setOpen(open)
  }
  
  const getCalendarContainer = () => calendarContainerRef.current
  
  const onFocusCalendar = () => {
    !open && isMouseDown ? setIsMouseDown(false) : setOpen(true)
  }
  
  const onMouseDownCalendar = () => {
    setIsMouseDown(true)
  }
  
  const calendar = (<Calendar
    style={{ zIndex: 1001 }}
    dateInputPlaceholder="날짜를 선택해주세요."
    format={getFormat(false)}
    disabledTime={null}
    timePicker={null}
    defaultValue={defaultValue !== undefined ? now : defaultValue}
    disabledDate={disabledDate}
    focusablePanel={false}
    className="ui-calendar"
    showDateInput={false}
    showTime={false}
  />)

  let input_style = {}
  if(inputWidth !== undefined) input_style.width = inputWidth
  if(inputHeight !== undefined) input_style.height = inputHeight

  return (
    <Picker
      animation="slide-up"
      calendar={calendar}
      value={value}
      onChange={onChangeCalendar}
      getCalendarContainer={getCalendarContainer}
      onOpenChange={onOpenChangeCalendar}
      open={open}
      style={{ zIndex: 1001 }}
    >
      {
        ({ value }) => {
          return (
            <span className="input-base type-1 date-picker" tabIndex="0" onMouseDown={onMouseDownCalendar} onFocus={onFocusCalendar}>
              <input
                placeholder="날짜를 선택하세요."
                disabled={false}
                readOnly
                tabIndex="-1"
                value={value && value.format(getFormat(false)) || ''}
                style={input_style}
              />
              <div ref={calendarContainerRef} />
            </span>
          );
        }
      }
    </Picker>
  )
}

DatePicker.propTypes = {
  defaultValue: PropTypes.any,
  inputWidth: PropTypes.node,
  inputHeight: PropTypes.node,
  onChange: PropTypes.func
}

export default DatePicker