import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../Login/schema';
import ContainerForms from '../Layout/LayoutComponents/ContainerForms';
import { FormBtn } from '../Layout/LayoutComponents/CustomComponents';
import { AUTH } from '../../Apollo/Querys';
import { LOGIN } from '../../Apollo/Mutations';
import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

const Login = () => {
  const client = useApolloClient();
  const [errorMsg, setError] = useState(null);
  const [authUser] = useMutation(LOGIN);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const { handleSubmit, errors, register, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const { isDirty, isValid } = formState;
  const onSubmit = async dataForm => {
    const { email, password } = dataForm;
    try {
      const { data } = await authUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      const { token, name } = data.authUser;
      localStorage.setItem('token', token);
      client.cache.writeQuery({
        query: AUTH,
        data: { isLoggedIn: { token, name } },
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
      <Heading textAlign="center" mt="50px">
        Login
      </Heading>
      <ContainerForms>
        <Text color="red" textAlign="center" mb="5px">
          {errorMsg}
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email} mb="10px">
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input name="email" type="email" ref={register} />
            <FormErrorMessage mb="5px">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password} mb="10px">
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <InputGroup display="block">
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                ref={register}
              />
              <InputRightElement width="3rem">
                <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage mb="5px">
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <FormBtn
            isLoading={formState.isSubmitting}
            isValid={isValid}
            isDirty={isDirty}
            children="Crear"
          />
        </form>
      </ContainerForms>
      <Text textAlign="center" mt="10px">
        ¿ No estas Registrado ?{' '}
        <Link to="/signup">
          <strong>Registrate.</strong>
        </Link>
      </Text>
    </>
  );
};

export default Login;
