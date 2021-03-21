import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Ingrese un nombre')
    .matches(/^([^0-9]*)$/, 'El nombre no debe contener numeros')
    .matches(/^[aA-zZ\s]+$/, 'Solo letras estan permitidas'),

  lastName: yup
    .string()
    .required('Ingrese su apellido')
    .matches(/^([^0-9]*)$/, 'El nombre no debe contener numeros')
    .matches(/^[aA-zZ\s]+$/, 'Solo letras estan permitidas'),
  email: yup
    .string()
    .email('Ingrese un email valido')
    .required('Ingrese un email')
    .max(30, 'Máximo 30 caracteres'),

  password: yup.string().required('Ingrese una contraseña'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),
});
