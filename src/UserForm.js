import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Container } from "@material-ui/core";
import Input from "./Components/Form/Input";
import Select from "./Components/Form/Select";
import DatePicker from "./Components/Form/DateTimePicker";
import CheckBox from "./Components/Form/Checkbox";
import Button from "./Components/Form/button";
import data from "./data/country.json";
const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));
const UserForm = () => {
  const classes = styles();
  const INITIAL_FORM_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    message: "",
    terms: false,
  };
  
  const FORM_VALIDATION = yup.object().shape({
    first_name: yup
      .string()
      .min(12, "Enter More char")
      .max(25, "Enter less chart")
      .required("This field is required"),
    last_name: yup.string(),
    email: yup.string().email("Invalid Email").required("Required"),
    phone: yup
      .number()
      .positive()
      .integer().min(10)
      .typeError("please enter valid number")
      .required("Required"),
    addressLine1: yup.string().required("re"),
    addressLine2: yup.string(),
    city: yup.string().required("r"),
    state: yup.string().required("reee"),
    country: yup.string().required("required"),
    arrivalDate: yup.date().required("re"),
    departureDate: yup.date().required("re"),
    message: yup.string(),
    terms: yup
      .boolean()
      .oneOf([true], "Terms should be accepted")
      .required("Terms should be accepted"),
  });
  return (
    <>
      <Grid container className={classes.root}>
        <Container maxWidth="md">
          <Grid item xs={12}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => console.log(values)}
            >
              <Form autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Input name="first_name" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Input name="last_name" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Input name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Input name="phone" label="Phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Input name="addressLine1" label="Address Line1" />
                  </Grid>

                  <Grid item xs={12}>
                    <Input name="addressLine2" label="Address Line2" />
                  </Grid>

                  <Grid item xs={6}>
                    <Input name="city" label="City" />
                  </Grid>

                  <Grid item xs={6}>
                    <Input name="state" label="State" />
                  </Grid>

                  <Grid item xs={12}>
                    <Select name="country" label="Country" options={data} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking Information</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DatePicker name="arrivalDate" label="Arrival Date" />
                  </Grid>

                  <Grid item xs={6}>
                    <DatePicker name="departureDate" label="Departure Date" />
                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CheckBox
                      name="terms"
                      legend="Terms of Services"
                      label="agree"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                   <Button>
                     submit
                   </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default UserForm;
