import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      style={styles}
      options={groceries}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const groceries = [
  { label: "milk" },
  { label: "apple" },
  { label: "banana" },
  { label: "ground beef" },
  { label: "lettuce" },
  { label: "tomato" },
  { label: "coke" },
  { label: "quinoa" },
];
