import React, { FC, useState } from 'react';
import { Input } from '@/components/Input';
import { Form } from '@/components/Form';
import { FormRow } from '@/components/FormRow';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { useThunkDispatch } from '@/hooks/useThunkDispatch';
import { login } from '@/store/auth/actions';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './styles.scss';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Это поле обязательно'),
  password: Yup.string().required('Это поле обязательно'),
});

type LoginFormProps = {
  onLogin?: () => void
};

export const LoginForm: FC<LoginFormProps> = ({
  onLogin,
}: LoginFormProps) => {
  const dispatch = useThunkDispatch();
  const [submitError, setSubmitError] = useState<string | null>(null);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        setSubmitError(null);
        return dispatch(
          login(values.username, values.password),
        )
          .then(() => onLogin && onLogin())
          .catch((e) => setSubmitError(e.message));
      }}
    >
      {({
        errors, touched, handleSubmit, isSubmitting, handleChange,
        handleBlur, values,
      }) => (
        <Form onSubmit={handleSubmit} fullWidth>
          {submitError && <p className="form-error">{submitError}</p>}
          <FormRow key="login" label="Логин" error={touched.username && errors.username}>
            <Input
              placeholder="Логин"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
          </FormRow>
          <FormRow label="Пароль" error={touched.password && errors.password}>
            <Input
              placeholder="Пароль"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </FormRow>
          <FormRow label="Запомнить пароль">
            <Checkbox />
          </FormRow>
          <FormRow>
            <Button
              type="submit"
              loading={isSubmitting}
              fullWidth
            >
              Войти
            </Button>
          </FormRow>
          <FormRow>
            <Button link size="small">Забыли пароль?</Button>
          </FormRow>
        </Form>
      )}
    </Formik>
  );
};
