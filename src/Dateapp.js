
import React, { useState } from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "./date.css";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },
  display: {
    position: "center",
    top: 2,
    left: 0,
    bottom: 2,
    background: "white",
    pointerEvents: "none",
    right: 50,
    width: 500,
    display: "flex",
    alignItems: "center"
  },
  input: {}
}));

var handleDateChange = function (a) {
  return a - 1911;
};

function DatePickers() {
  const [selectedDate, setSelecteDate] = useState(new Date());
  const year = handleDateChange(selectedDate.getFullYear());
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          id="date-picker-inline"
          label="阿公店開店日選擇"
          variant="inline"
          //defaultValue="2021-05-16"
          value={selectedDate}
          onChange={setSelecteDate}
          format={"民國" + year + "年 / MM月 / dd號"}
          margin="normal"
          fullWidth
          alignItems='center'
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    </form>
  );
}

export default DatePickers;