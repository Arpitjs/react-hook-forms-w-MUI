import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import FormInputText from "./FormComponents/Input";
import FormInputRadio from './FormComponents/RadioButton';

export const Form = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6"> Form Demo</Typography>
      <FormInputText name="textValue" control={control} label="Text Input" />

      <FormInputRadio
        name={"radioValue"}
        control={control}
        label={"Radio Input"}
      />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
      <Button onClick={() => reset({ textValue: "" })} variant={"outlined"}>
        Reset
      </Button>
    </Paper>
  );
};
