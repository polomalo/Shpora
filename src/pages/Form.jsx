import React from 'react'

const Form = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">react-hook-form VS formik</h2>
      <hr />
      <div className="content-text">
        <p>
          Формы - это часть большинства веб-приложений. Однако их создание и
          управление может быть сложным для новичков.
        </p>
        <p>
          В React существует несколько способов использования форм в приложении,
          в зависимости от потребностей и предпочтений разработчика.
        </p>
      </div>
      <h3 className="content-title">React Hook Form</h3>
      <div className="content-text">
        <p>
          React Hook Form - это библиотека, которая значительно упрощает процесс
          работы с формами в React приложениях. Она позволяет создавать
          интерактивные и дружественные формы с минимумом лишнего кода.
        </p>
      </div>
      <h3 className="content-title">Formik</h3>
      <div className="content-text">
        <p>
          Formik - это еще одна библиотека для управления формами в приложениях
          на React. Её основная цель - упростить и облегчить процесс работы с
          формами, сбора данных от пользователя и их валидации.
        </p>
      </div>
      <h3 className="content-title">
        Пример формы регистрации с использованием Formik
      </h3>
      <div className="content-code">
        <pre>
          <code>{`
import React, { useState } from 'react'
import { useFormik } from 'formik'
import {
  Stack,
  TextField,
  Button,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  FormControlLabel,
  Alert,
  Snackbar,
} from '@mui/material'
import * as yup from 'yup'

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 8 characters length')
    .matches(
      /^(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Confirm Password is required'),
  gender: yup.string().required('Gender is required'),
  birthDay: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/,
      'Birth Date must be in DD.MM.YYYY format'
    )
    .required('Birth Date is required'),
  phoneNumber: yup
    .string()
    .matches(
      /^\+375(17|25|29|33|44)\d{7}$/,
      'Phone number must be in +375XXXXXXXXX format'
    )
    .required('Phone Number is required'),
})

const RegistrationForm = () => {
  const [openSuccess, setOpenSuccess] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthDay: '',
      gender: '',
      phoneNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2))
      setTimeout(() => {
        resetForm()
        setOpenSuccess(true)
      }, 500)
    },
  })

  const handleCloseSuccess = () => {
    setOpenSuccess(false)
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <TextField
            name="birthDay"
            label="Birth Date"
            variant="outlined"
            placeholder="DD.MM.YYYY"
            value={formik.values.birthDay}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.birthDay && Boolean(formik.errors.birthDay)}
            helperText={formik.touched.birthDay && formik.errors.birthDay}
          />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              row
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            {formik.touched.gender && formik.errors.gender && (
              <div
                style={{
                  color: '#d32f2f',
                  fontSize: '0.75rem',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: '400',
                  marginLeft: '14px',
                  letterSpacing: '0.03333em',
                }}
              >
                {formik.errors.gender}
              </div>
            )}
          </FormControl>
          <TextField
            name="phoneNumber"
            label="Phone number"
            variant="outlined"
            placeholder="+375XXXXXXXXX"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Stack>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ marginTop: 3 }}
        >
          Submit
        </Button>
      </form>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: '100%' }}
        >
          Successfully registered! Data sent.
        </Alert>
      </Snackbar>
    </>
  )
}

export default RegistrationForm
        `}</code>
        </pre>
      </div>
    </div>
  )
}

export default Form
