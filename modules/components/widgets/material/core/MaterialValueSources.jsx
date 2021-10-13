import React from "react"
import IconButton from "@mui/material/IconButton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Popover from "@mui/material/Popover"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1)
  }
}))

export default ({ valueSources, valueSrc, title, setValueSrc, readonly }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleOpenClose = (event) => {
    anchorEl ? handleClose() : handleOpen(event)
  }

  const handleChange = (e) => {
    if (e.target.value === undefined) return
    setValueSrc(e.target.value)
    handleClose()
  }

  const renderOptions = (valueSources) =>
    valueSources.map(([srcKey, info]) => (
      <FormControlLabel
        key={srcKey}
        value={srcKey}
        checked={valueSrc == srcKey || (!valueSrc && srcKey == "value")}
        control={<Radio />}
        label={info.label}
      />
    ))

  const open = Boolean(anchorEl)

  return (
    <div>
      <IconButton size="small" onClick={toggleOpenClose}>
        <ExpandMoreIcon />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handleClose}
        classes={{
          paper: classes.paper
        }}
        disablePortal
      >
        <FormControl component="fieldset">
          {title && <FormLabel component="legend">{title}</FormLabel>}
          <RadioGroup value={valueSrc || "value"} onChange={handleChange}>
            {renderOptions(valueSources)}
          </RadioGroup>
        </FormControl>
      </Popover>
    </div>
  )
}
