import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { linkStyle } from 'constants/styles'
import { email as emailRegex } from 'constants/regexes'
import { PasswordFormLine, TextFormLine, NeutralButton } from 'components'

const validateLogin = (values = {}) => {
  let errors = {}

  if (!values.email) {
    errors.email = 'Digite seu e-mail'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'E-mail inválido'
  }

  if (!values.password) {
    errors.password = 'Digite sua senha'
  }

  return errors
}

export default ({ onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validate={validateLogin}
      initialValues={{ email: '', password: '' }}
    >
      {props => (
        <Form>
          <Field
            type="text"
            name="email"
            labelText="Email"
            component={TextFormLine}
          />
          <Field
            type="password"
            name="password"
            labelText="Password"
            component={PasswordFormLine}
          />
          <div className="flex items-center">
            <Link className={linkStyle} to="/signup">
              Or Signup
            </Link>
            <span className="inline-block px-2">|</span>
            <Link className={linkStyle} to="/forgot-password">
              Forgot Password?
            </Link>
            <NeutralButton className="ml-auto" type="submit">
              Log In
            </NeutralButton>
          </div>
        </Form>
      )}
    </Formik>
  )
}
