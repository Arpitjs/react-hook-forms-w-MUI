import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

const options = [
  {
    label: "post punk",
    value: "talking heads",
  },
  {
    label: "math rock",
    value: "toe",
  },
];

const FormInputRadio = ({ name, control, label }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {options.map((singleOption) => (
              <FormControlLabel
                value={singleOption.value}
                label={singleOption.label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default FormInputRadio;
