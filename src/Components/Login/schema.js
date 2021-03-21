import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese un email valido')
    .required('Ingrese un email')
    .max(30, 'Máximo 30 caracteres'),

  password: yup.string().required('Ingrese una contraseña'),
});
