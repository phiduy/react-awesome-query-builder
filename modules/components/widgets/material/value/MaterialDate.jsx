import React, { useState, useCallback, useEffect } from "react"
import { MobileDatePicker, DatePicker } from "@mui/lab"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import { isValid, format, toDate, parse, isEqual } from "date-fns"

export default (props) => {
  const {
    value,
    setValue,
    readonly,
    customProps,
    dateFormat,
    valueFormat,
    placeholder,
    useKeyboard
  } = props
  const [currentDate, setDate] = useState(new Date())

  const formatSingleValue = (value) => {
    return value && isValid(value) ? format(value, valueFormat) : undefined
  }

  const handleChange = (value) => {
    setDate(value)
    setValue(formatSingleValue(value))
  }

  useEffect(() => {
    if (value) {
      const nextValue = parse(value, valueFormat, new Date())
      if (!isEqual(nextValue, currentDate)) {
        setDate(nextValue)
      }
    }
  }, [value])

  return (
    <FormControl>
      <DatePicker
        readOnly={readonly}
        disabled={readonly}
        format={dateFormat}
        value={currentDate}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        {...customProps}
      />
    </FormControl>
  )
}
