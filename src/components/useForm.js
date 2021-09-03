import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return {
    values,
    setValues,
    handleOnChange,
    errors,
    setErrors,
    resetForm,
  };
}

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

export function Form(props) {
  const classes = styles();
  const { children, ...others } = props;

  return (
    <form {...others} className={classes.root} autoComplete="off">
      {children}
    </form>
  );
}
