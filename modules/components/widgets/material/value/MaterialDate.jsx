import React from "react"
import DesktopDatePicker from "@mui/lab/DesktopDatePicker"
import MobileDatePicker from "@mui/lab/MobileDatePicker"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"

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

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined
  }

  const handleChange = (value) => {
    setValue(formatSingleValue(value))
  }

  const Picker = useKeyboard ? DesktopDatePicker : MobileDatePicker

  return (
    <FormControl>
      <Picker
        readOnly={readonly}
        disabled={readonly}
        inputFormat={dateFormat}
        value={value || null}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        {...customProps}
      />
    </FormControl>
  )
}
