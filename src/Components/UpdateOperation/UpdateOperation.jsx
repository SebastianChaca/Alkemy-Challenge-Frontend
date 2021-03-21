import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Heading,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import ContainerForms from '../Layout/LayoutComponents/ContainerForms';
import { FormBtn } from '../Layout/LayoutComponents/CustomComponents';
import { UPDATE_OPERATION } from '../../Apollo/Mutations';
import { GET_OPERATIONS } from '../../Apollo/Querys';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { useCustomToast } from '../Layout/LayoutComponents/CustomComponents';
const UpdateOperation = ({ defaultValues, id }) => {
  const [customToast] = useCustomToast();
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const [errorMsg, setError] = useState(null);
  const [updateOperation] = useMutation(UPDATE_OPERATION, {
    update(cache, { data: { updateOperation } }) {
      const { getUserOperations } = cache.readQuery({ query: GET_OPERATIONS });
      const filteredOperations = getUserOperations.filter(
        operation => operation.id !== id
      );
      cache.writeQuery({
        query: GET_OPERATIONS,
        data: {
          getUserOperations: [...filteredOperations, updateOperation],
        },
      });
    },
  });
  const { type, concept, amount, category } = defaultValues[0];

  const { handleSubmit, errors, register, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { type, concept, amount, category },
  });

  const { isDirty, isValid } = formState;

  const onSubmit = async data => {
    try {
      const { amount, concept, category } = data;

      await updateOperation({
        variables: {
          id,
          input: {
            category,
            amount,
            concept,
          },
        },
      }).then(() => {
        setMessage('Actualizando operación...');
        setTimeout(() => {
          history.push('/operaciones');
          customToast('success', 'Operación actualizada');
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
        Actualizar una operación
      </Heading>
      <ContainerForms>
        <Text color={message ? 'blue' : 'red'} textAlign="center" mb="5px">
          {errorMsg && errorMsg}
          {message && message}
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="10px">
            <FormLabel htmlFor="type">Tipo de Operación</FormLabel>
            <Input name="type" readOnly={true} ref={register} />
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
            <Input name="amount" type="number" ref={register} />
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
            children="Actualizar"
          />
        </form>
      </ContainerForms>
    </>
  );
};
export default UpdateOperation;
