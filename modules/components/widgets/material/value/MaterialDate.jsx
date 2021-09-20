import React from "react";
import { MobileDatePicker, DatePicker } from "@mui/lab";
import FormControl from "@mui/material/FormControl";

export default (props) => {
  const {value, setValue, readonly, customProps, dateFormat, valueFormat, placeholder, useKeyboard} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const Picker = useKeyboard ? MobileDatePicker : DatePicker;

  return (
    <FormControl>
      <Picker
        readOnly={readonly}
        disabled={readonly}
        placeholder={!readonly ? placeholder : ""}
        format={dateFormat}
        value={value || null}
        onChange={handleChange}
        {...customProps}
      />
    </FormControl>
  );
};