import React from "react";
import { Grid } from "@material-ui/core";

import { useForm, Form } from "../Components/useForm";
import Controls from "../Components/controls/controls";

const initialValues = {
  full_name: "",
  email: "",
  gender: "",
  departmentId: 0,
  isPermanent: false,
  city: "",
  mobile: "",
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const departmentItems = [
  { id: 1, title: "Development" },
  { id: 2, title: "Marketing" },
  { id: 3, title: "Accounting" },
  { id: 4, title: "HR" },
];

const EmployeeForm = () => {
  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ("full_name" in fieldValues)
      temp.full_name = fieldValues.full_name ? "" : "This filed is required";

    if ("email" in fieldValues)
      temp.email = /^$|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";

    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required";

    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId > 0 ? "" : "This filed is required";
    console.log(temp);
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const { values, handleOnChange, errors, setErrors, resetForm } = useForm(
    initialValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("sdfdsf");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="FullName"
            name="full_name"
            value={values.full_name}
            onChange={handleOnChange}
            error={errors.full_name}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleOnChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleOnChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleOnChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleOnChange}
            label="gender"
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            value={values.departmentId}
            onChange={handleOnChange}
            label="Department"
            options={departmentItems}
            error={errors.departmentId}
          />
          <Controls.Checkbox
            name="isPermanent"
            value={values.isPermanent}
            onChange={handleOnChange}
            label="Permanent Employee"
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleOnChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />

            <Controls.Button color="default" text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
