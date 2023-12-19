import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Form,
  FieldsWrapper,
  FormField,
  Input,
  TextInput,
  ErrorText,
} from './ContactForm.styled';
import { ButtonSend } from '../buttons/ButtonSend/ButtonSend';

const contactSchema = yup
  .object({
    name: yup
      .string()
      .min(3, 'Name should be at least 3 characters')
      .max(50, 'Full name should not exceed 50 characters')
      .required('Full name is required'),
    email: yup
      .string()
      .test(value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      .required('Email is required'),
    phone: yup
      .string()
      .test(value => /^380\d{9}$/.test(value))
      .required('Phone is required'),
  })
  .required();

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({ resolver: yupResolver(contactSchema) });

  const createMailtoLink = data => {
    const { name, email, phone, message } = data;
    const subject = encodeURIComponent('Contact me');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
    return `mailto:office@ecosolution.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = data => {
    const mailtoLink = createMailtoLink(data);
    window.location.href = mailtoLink;
    reset();
  };

  const handleBlur = fieldName => {
    trigger(fieldName);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper>
        <FormField>
          * Full name:
          <Input
            {...register('name')}
            placeholder="John Rosie"
            onBlur={() => handleBlur('name')}
            $hasError={!!errors.name}
          />
          <ErrorText>{errors.name?.message}</ErrorText>
        </FormField>

        <FormField>
          * E-mail:
          <Input
            {...register('email')}
            placeholder="johnrosie@gmail.com"
            onBlur={() => handleBlur('email')}
            $hasError={!!errors.email}
          />
          <ErrorText>{errors.email?.message}</ErrorText>
        </FormField>

        <FormField>
          * Phone:
          <Input
            {...register('phone')}
            placeholder="380961234567"
            onBlur={() => handleBlur('phone')}
            $hasError={!!errors.phone}
          />
          <ErrorText>{errors.phone?.message}</ErrorText>
        </FormField>

        <FormField>
          Message:
          <TextInput {...register('message')} placeholder="My message...." />
        </FormField>
      </FieldsWrapper>
      <ButtonSend />
    </Form>
  );
};
