import React, { useState, useCallback, useEffect } from "react"
import { DatePicker } from "@mui/lab"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import moment from "moment"

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
  const [currentDate, setDate] = useState(null)

  const formatSingleValue = (value) => {
    return value && moment(value).isValid()
      ? moment(value).format(valueFormat)
      : undefined
  }

  const handleChange = (value) => {
    setDate(value)
    setValue(formatSingleValue(value))
  }

  useEffect(() => {
    if (value) {
      if (currentDate && !moment(value).isSame(currentDate)) {
        setDate(moment(value))
      }
    }
  }, [value])

  return (
    <FormControl>
      <DatePicker
        readOnly={readonly}
        disabled={readonly}
        inputFormat={dateFormat}
        value={currentDate}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        {...customProps}
      />
    </FormControl>
  )
}
