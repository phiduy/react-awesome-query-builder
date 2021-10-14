import React, { useState, useEffect } from "react"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import DateTimePicker from "@mui/lab/DateTimePicker"
import moment from "moment"

export default (props) => {
  const {
    value,
    setValue,
    use12Hours,
    readonly,
    dateFormat,
    timeFormat,
    valueFormat,
    customProps,
    useKeyboard
  } = props

  const dateTimeFormat = dateFormat + " " + timeFormat
  const [currentDateTime, setDateTime] = useState(new Date())

  const formatSingleValue = (value) => {
    return value && moment(value).isValid()
      ? moment(value).format(valueFormat)
      : undefined
  }

  const handleChange = (value) => {
    setDateTime(value)
    setValue(formatSingleValue(value))
  }

  useEffect(() => {
    if (value) {
      console.log(value)
      if (currentDateTime && !moment(value).isSame(currentDateTime)) {
        setDateTime(moment(value))
      }
    }
  }, [value])

  return (
    <FormControl>
      <DateTimePicker
        readOnly={readonly}
        disabled={readonly}
        value={currentDateTime}
        ampm={!!use12Hours}
        inputFormat={dateTimeFormat}
        onChange={handleChange}
        renderInput={(props) => <TextField {...props} />}
        {...customProps}
      />
    </FormControl>
  )
}
