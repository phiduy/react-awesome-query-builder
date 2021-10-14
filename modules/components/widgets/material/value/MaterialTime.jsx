import React from "react"
import TimePicker from "@mui/lab/TimePicker"
import MobileTimePicker from "@mui/lab/MobileTimePicker"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import moment from "moment"

export default (props) => {
  const {
    value,
    setValue,
    use12Hours,
    readonly,
    placeholder,
    timeFormat,
    valueFormat,
    customProps,
    useKeyboard
  } = props

  const formatSingleValue = (value) => {
    return value && moment(value).isValid()
      ? moment(value).format(valueFormat)
      : undefined
  }

  const handleChange = (value) => {
    setValue(formatSingleValue(value))
  }

  const Picker = useKeyboard ? MobileTimePicker : TimePicker
  const hasSeconds = timeFormat.indexOf(":ss") != -1
  const timeValue = value ? moment(value, timeFormat) : null

  return (
    <FormControl>
      <Picker
        readOnly={readonly}
        disabled={readonly}
        ampm={!!use12Hours}
        placeholder={!readonly ? placeholder : ""}
        inputFormat={timeFormat}
        value={timeValue || null}
        onChange={handleChange}
        views={
          hasSeconds ? ["hours", "minutes", "seconds"] : ["hours", "minutes"]
        }
        renderInput={(params) => <TextField {...params} />}
        {...customProps}
      />
    </FormControl>
  )
}
