import React from "react"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"

export default (props) => {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    customProps,
    maxLength
  } = props

  const onChange = (e) => {
    let val = e.target.value
    if (val === "") val = undefined // don't allow empty value
    setValue(val)
  }

  const textValue = value || ""

  const textFieldProps = {
    ...customProps,
    label: customProps && customProps.valueLabel ? customProps.valueLabel : ""
  }

  return (
    <FormControl>
      <TextField
        value={textValue}
        placeholder={!readonly ? placeholder : ""}
        InputProps={{
          readOnly: readonly
        }}
        inputProps={{
          maxLength: maxLength
        }}
        disabled={readonly}
        onChange={onChange}
        {...textFieldProps}
      />
    </FormControl>
  )
}
