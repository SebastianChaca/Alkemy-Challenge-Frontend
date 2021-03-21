import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { DELETE_OPERATION } from '../../../Apollo/Mutations';
import { GET_OPERATIONS } from '../../../Apollo/Querys';
import { useCustomToast } from '../../Layout/LayoutComponents/CustomComponents';
const DeleteModal = ({ isOpen, onClose, id }) => {
  const [customToast] = useCustomToast();
  const [loading, setLoading] = useState(null);
  const [deleteOperation] = useMutation(DELETE_OPERATION, {
    update(cache) {
      const { getUserOperations } = cache.readQuery({
        query: GET_OPERATIONS,
      });

      cache.writeQuery({
        query: GET_OPERATIONS,
        data: {
          getUserOperations: getUserOperations.filter(
            operation => operation.id !== id
          ),
        },
      });
    },
  });

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteOperation({
        variables: {
          id,
        },
      });
      customToast('success', 'Operación eliminada');
    } catch (error) {
      customToast('error', 'Se produjo un error, intentalo de nuevo');
    }

    setLoading(false);
    onClose();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="xs"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar Operación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading
              ? 'Eliminando...'
              : '¿ Esta seguro que desea eliminar esta operación ?'}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              onClick={handleDelete}
              isLoading={loading}
            >
              Eliminar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
