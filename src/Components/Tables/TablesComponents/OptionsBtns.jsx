import React from 'react';
import { MdEdit } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Flex, Button, useDisclosure } from '@chakra-ui/react';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';

const OptionsBtns = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleEdit = () => {};

  return (
    <Flex justifyContent="center">
      <Button fontSize="18px" p="0" onClick={onOpen} background="none">
        <AiTwotoneDelete />
      </Button>
      <DeleteModal isOpen={isOpen} onClose={onClose} id={id} />
      <Link to={`actualizar/${id}`}>
        <Button fontSize="20px" p="0" onClick={handleEdit} background="none">
          <MdEdit />
        </Button>
      </Link>
    </Flex>
  );
};

export default OptionsBtns;
