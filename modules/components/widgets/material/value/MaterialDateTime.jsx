import React, { useState, useEffect } from "react"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import DateTimePicker from "@mui/lab/DateTimePicker"
import { isValid, format, toDate, parse, isEqual } from "date-fns"

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
    return value && isValid(value) ? format(value, valueFormat) : undefined
  }

  const handleChange = (value) => {
    setDateTime(value)
    setValue(formatSingleValue(value))
  }

  useEffect(() => {
    if (value) {
      const nextValue = parse(value, valueFormat, new Date())
      if (!isEqual(nextValue, currentDateTime)) {
        setDateTime(nextValue)
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
        format={dateTimeFormat}
        onChange={handleChange}
        renderInput={(props) => <TextField {...props} />}
        {...customProps}
      />
    </FormControl>
  )
}
