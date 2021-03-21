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
import { schema } from './schema';
import ContainerForms from '../Layout/LayoutComponents/ContainerForms';
import { FormBtn } from '../Layout/LayoutComponents/CustomComponents';
import { CREATE_USER } from '../../Apollo/Mutations';

import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const [errorMsg, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const [newUser] = useMutation(CREATE_USER);

  const { handleSubmit, errors, register, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const { isDirty, isValid } = formState;
  const onSubmit = async dataForm => {
    const { name, lastName, email, password } = dataForm;

    try {
      await newUser({
        variables: {
          input: {
            name,
            lastName,
            email,
            password,
          },
        },
      }).then(() => {
        setMessage('Creando usuario, será redireccionado...');
        setTimeout(() => {
          history.push('/');
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
        Sign up
      </Heading>
      <ContainerForms>
        <Text color={message ? 'blue' : 'red'} textAlign="center" mb="5px">
          {errorMsg && errorMsg}
          {message && message}
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name} mb="10px">
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input name="name" ref={register} />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.lastName} mb="10px">
            <FormLabel htmlFor="lastName">Apellido</FormLabel>
            <Input name="lastName" ref={register} />
            <FormErrorMessage mb="5px">
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>

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

          <FormControl isInvalid={errors.confirmPassword} mb="10px">
            <FormLabel htmlFor="confirmPassword">
              Confirmar contraseña
            </FormLabel>
            <InputGroup display="block">
              <Input
                name="confirmPassword"
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
              {errors.confirmPassword && errors.confirmPassword.message}
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
      <Text textAlign="center" mt="10px" mr="5px">
        ¿ Estas registrado ?{'  '}
        <Link to="/login">
          <strong>Ingresa.</strong>
        </Link>
      </Text>
    </>
  );
};

export default Signup;
