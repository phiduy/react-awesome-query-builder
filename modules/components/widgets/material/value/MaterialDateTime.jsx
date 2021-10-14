import React, { useState, useEffect } from "react"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import DesktopDateTimePicker from "@mui/lab/DesktopDateTimePicker"
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker"
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

  const formatSingleValue = (value) => {
    return value && moment(value).isValid()
      ? moment(value).format(valueFormat)
      : undefined
  }

  const handleChange = (value) => {
    setValue(formatSingleValue(value))
  }

  const Picker = useKeyboard ? DesktopDateTimePicker : MobileDateTimePicker

  return (
    <FormControl>
      <Picker
        readOnly={readonly}
        disabled={readonly}
        value={value || null}
        ampm={!!use12Hours}
        inputFormat={dateTimeFormat}
        onChange={handleChange}
        renderInput={(props) => <TextField {...props} />}
        {...customProps}
      />
    </FormControl>
  )
}
