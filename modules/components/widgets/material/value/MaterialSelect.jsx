import React from "react"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import omit from "lodash/omit"
import { mapListValues } from "../../../../utils/stuff"

export default (props) => {
  const {
    listValues,
    value,
    setValue,
    allowCustomValues,
    readonly,
    placeholder,
    customProps
  } = props
  const renderOptions = () =>
    mapListValues(listValues, ({ title, value }) => {
      return (
        <MenuItem key={value} value={value}>
          {title}
        </MenuItem>
      )
    })

  const onChange = (e) => {
    if (e.target.value === undefined) return
    setValue(e.target.value)
  }

  const renderValue = (selectedValue) => {
    if (!readonly && selectedValue == null) return placeholder
    return getListValueTitle(selectedValue)
  }

  const getListValueTitle = (selectedValue) =>
    mapListValues(listValues, ({ title, value }) =>
      value === selectedValue ? title : null
    )
      .filter((v) => v !== null)
      .shift()

  const hasValue = value != null

  const selectProps = {
    ...omit(customProps, ["showSearch", "input"])
  }

  return (
    <FormControl>
      <InputLabel id="select-label">{readonly ? placeholder : ""}</InputLabel>
      <Select
        autoWidth
        displayEmpty
        labelId="select-label"
        onChange={onChange}
        value={hasValue ? value : ""}
        disabled={readonly}
        readOnly={readonly}
        renderValue={renderValue}
        {...selectProps}
      >
        {renderOptions()}
      </Select>
    </FormControl>
  )
}
