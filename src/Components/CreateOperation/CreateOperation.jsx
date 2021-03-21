import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Heading,
  Select,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import ContainerForms from '../Layout/LayoutComponents/ContainerForms';
import { FormBtn } from '../Layout/LayoutComponents/CustomComponents';
import { useMutation } from '@apollo/client';
import { CREATE_OPERATION } from '../../Apollo/Mutations';
import { GET_OPERATIONS } from '../../Apollo/Querys';
import { useHistory } from 'react-router-dom';
import { useCustomToast } from '../Layout/LayoutComponents/CustomComponents';
const CreateOperation = () => {
  const [customToast] = useCustomToast();
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const [errorMsg, setError] = useState(null);
  const [newOperation] = useMutation(CREATE_OPERATION, {
    update(cache, { data: { newOperation } }) {
      const { getUserOperations } = cache.readQuery({ query: GET_OPERATIONS });
      cache.writeQuery({
        query: GET_OPERATIONS,
        data: {
          getUserOperations: [...getUserOperations, newOperation],
        },
      });
    },
  });
  const { handleSubmit, errors, register, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const { isDirty, isValid } = formState;
  const onSubmit = async data => {
    try {
      const { type, amount, concept, category } = data;

      await newOperation({
        variables: {
          input: {
            category,
            type,
            amount,
            concept,
          },
        },
      }).then(() => {
        setMessage('Creando operación...');
        setTimeout(() => {
          history.push('/operaciones');
          customToast('success', 'Operación realizada');
        }, 2000);
      });
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <>
      <Heading textAlign="center" mt="20px">
        Realizar una operación
      </Heading>
      <ContainerForms>
        <Text color={message ? 'blue' : 'red'} textAlign="center" mb="5px">
          {errorMsg && errorMsg}
          {message && message}
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.type} mb="10px">
            <FormLabel htmlFor="type">Tipo de Operación</FormLabel>
            <Select variant="flushed" name="type" ref={register}>
              <option value="">Seleccione una opción</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Egreso">Egreso</option>
            </Select>
            <FormErrorMessage>
              {errors.type && errors.type.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.concept} mb="10px">
            <FormLabel htmlFor="concept">Concepto</FormLabel>
            <Input name="concept" ref={register} />
            <FormErrorMessage mb="5px">
              {errors.concept && errors.concept.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.amount} mb="10px">
            <FormLabel htmlFor="amount">Monto</FormLabel>
            <NumberInput defaultValue={0}>
              <NumberInputField name="amount" ref={register} />
            </NumberInput>
            <FormErrorMessage mb="5px">
              {errors.amount && 'Ingrese un monto'}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.category} mb="10px">
            <FormLabel htmlFor="category">Categoría</FormLabel>
            <Input name="category" type="text" ref={register} />
            <FormErrorMessage mb="5px">
              {errors.category && errors.category.message}
            </FormErrorMessage>
          </FormControl>
          <FormBtn
            isLoading={formState.isSubmitting || message}
            isValid={isValid}
            isDirty={isDirty}
            children="Crear"
          />
        </form>
      </ContainerForms>
    </>
  );
};
export default CreateOperation;
