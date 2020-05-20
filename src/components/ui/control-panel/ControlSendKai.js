import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  useDisclosure,
} from '@chakra-ui/core';

function ControlSendKai() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  let [value, setValue] = React.useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Button
        onClick={onOpen}
        variantColor="red"
        width="80%"
        ml={6}
        mt={10}
        rounded={40}
        size="lg"
      >
        Kaikai
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send a Kai</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Textarea
              border="none"
              value={value}
              onChange={handleInputChange}
              placeholder="What is happening?"
              size="sm"
            />
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3}>
              Kai
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ControlSendKai;
