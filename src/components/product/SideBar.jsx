import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";

const SideBar = () => {
  const { categories, getCategories } = useProducts();

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Paper sx={{ p: 2 }}>
      <TextField fullWidth variant="standard" label="search..." />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel control={<Radio />} value={"all"} label={"All"} />
          {categories.map((elem) => (
            <FormControlLabel
              key={elem.id}
              value={elem.name}
              label={elem.name}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
