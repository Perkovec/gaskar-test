import React, { FC } from 'react';
import * as Yup from 'yup';
import { Modal } from '@/components/Modal';
import { Formik } from 'formik';
import { Form } from '@/components/Form';
import { FormRow } from '@/components/FormRow';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { useThunkDispatch } from '@/hooks/useThunkDispatch';
import { createProject } from '@/store/projects/actions';
import './styles.scss';

type ProjectsFormProps = {
  show?: boolean,
  onClose?: () => void,
};

const initialValues = {
  title: '',
  dateStart: '',
  dateEnd: '',
  administrator: '',
  lead: '',
  customer: '',
  category: '',
};

const projectSchema = Yup.object().shape({
  title: Yup.string().required('Это поле обязательно'),
  dateStart: Yup.date().required('Оба поля обязательны'),
  dateEnd: Yup.date().required('Оба поля обязательны'),
  administrator: Yup.string().required('Это поле обязательно'),
  lead: Yup.string().required('Это поле обязательно'),
  customer: Yup.string().required('Это поле обязательно'),
  category: Yup.string().required('Это поле обязательно'),
});

export const ProjectsForm: FC<ProjectsFormProps> = ({
  show = false,
  onClose,
}: ProjectsFormProps) => {
  const dispatch = useThunkDispatch();

  return (
    <Modal show={show} onClose={onClose} title="Создать проект">
      <Formik
        initialValues={initialValues}
        validationSchema={projectSchema}
        onSubmit={(values, { resetForm }) => dispatch(createProject(values)).then(() => {
          resetForm();
          if (onClose) onClose();
        })}
      >
        {({
          errors, touched, handleSubmit, isSubmitting, handleChange,
          handleBlur, values,
        }) => (
          <Form onSubmit={handleSubmit} fullWidth>
            <FormRow error={touched.title && errors.title}>
              <Input
                placeholder="Название"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </FormRow>
            <FormRow
              label="Продолжительность проекта"
              error={touched.dateStart && touched.dateEnd && (errors.dateStart || errors.dateEnd)}
            >
              <Input
                name="dateStart"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateStart}
              />
              <div className="dates-delimeter">–</div>
              <Input
                name="dateEnd"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateEnd}
              />
            </FormRow>
            <FormRow error={touched.lead && errors.lead}>
              <Input
                placeholder="Руководитель проекта"
                name="lead"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lead}
              />
            </FormRow>
            <FormRow error={touched.administrator && errors.administrator}>
              <Input
                placeholder="Администратор проекта"
                name="administrator"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.administrator}
              />
            </FormRow>
            <FormRow error={touched.customer && errors.customer}>
              <Input
                placeholder="Заказчик"
                name="customer"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.customer}
              />
            </FormRow>
            <FormRow error={touched.category && errors.category}>
              <Input
                placeholder="Категория"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
            </FormRow>
            <FormRow>
              <Button
                type="submit"
                loading={isSubmitting}
                fullWidth
              >
                Создать
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
