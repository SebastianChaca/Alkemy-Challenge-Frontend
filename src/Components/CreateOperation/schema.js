import * as yup from 'yup';

export const schema = yup.object().shape({
  type: yup.string().required('Ingrese un tipo de operación'),
  concept: yup
    .string()
    .required('Ingrese un concepto')
    .max(30, 'Máximo 30 caracteres'),
  amount: yup.number().required('Ingrese un monto'),
  category: yup.string().required('Ingrese una categoría'),
});
