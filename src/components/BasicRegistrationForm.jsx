import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Stack
} from "@mui/material";
import { usePageData } from '../pages/PageContext';

export default function BasicRegistrationForm(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: ""
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      terms: ""
    };

    if (!values.email.includes("@")) {
      newErrors.email = "Enter a valid email address";
    }
    if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = "Passwords must match";
    }
    if (!values.terms) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(e => !e);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    // Submit values to API here
    console.log("Form submitted", values);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        mb: 2,
        p: 3,
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      <Typography variant="h5" mb={2}>
        Create account
      </Typography>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="First name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Last name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </Stack>

        <TextField
          fullWidth
          required
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          fullWidth
          required
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <TextField
          fullWidth
          required
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="terms"
              checked={values.terms}
              onChange={handleChange}
            />
          }
          label="I agree to the terms and conditions"
        />
        {errors.terms && (
          <Typography color="error" variant="caption">
            {errors.terms}
          </Typography>
        )}

        <Button type="submit" variant="contained" fullWidth>
          Register
        </Button>
      </Stack>
    </Box>
  );
}
