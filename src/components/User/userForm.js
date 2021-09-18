import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import { useForm, Form } from "../../Components/useForm";
import Controls from "../../Components/controls/controls";
import { useParams, useHistory } from 'react-router-dom';

import { FormUserContext } from '../../App/App';
import { filter } from "lodash";

const designationItems = [
  { id: 1, title: "Trainee" },
  { id: 2, title: "Software Engineer" },
  { id: 3, title: "Senior Software Engineer" },
  { id: 4, title: "Associate Lead" },
  { id: 5, title: "Lead" },
  { id: 6, title: "BA" },
  { id: 7, title: "Manager" },
];

const UserForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    userData,
    userDispatchAction,
  } = useContext(FormUserContext);

  const currentUser = filter(userData, user => user.id === parseInt(id))

  const defaultValues = {
    firstName: "",
    lastName: "",
    dob: null,
    designation: 0,
    experience: 0
  };

  const initialValues = currentUser.length ? currentUser[0] : defaultValues;

  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This filed is required";

    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This filed is required";

    if ("designation" in fieldValues)
      temp.designation =
        fieldValues.designation > 0 ? "" : "This filed is required";
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
      //window.alert("sdfdsf");
      const type = parseInt(id) ? 'edit' : 'add';
      values.id = Math.floor(Math.random() * 100)
      userDispatchAction({ type: type, value: values })
      setTimeout(()=>{
        history.push('/userGrud')
        //window.location.href = '/userGrud'
      },1000)
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="firstName"
            value={values.firstName}
            onChange={handleOnChange}
            error={errors.firstName}
          />
          <Controls.Input
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
            error={errors.lastName}
          />

          <Controls.DatePicker
            name="dob"
            label="Date of Birth"
            value={values.dob}
            onChange={handleOnChange}
          />
          <Controls.Select
            name="designation"
            value={values.designation}
            onChange={handleOnChange}
            label="Designation"
            options={designationItems}
            error={errors.designation}
          />
          <Controls.Input
            label="Experience"
            name="experience"
            value={values.experience}
            onChange={handleOnChange}
          />
        </Grid>

        <Grid item xs={6}>

          <div>
            <Controls.Button type="submit" text="Submit" />

            <Controls.Button color="default" text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default UserForm;
