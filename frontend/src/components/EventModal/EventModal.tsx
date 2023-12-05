import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Image } from "@chakra-ui/react";

const EventModal = ({ isOpen, onClose, eventId }) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ticket for event #{eventId}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src="https://ipfs.io/ipfs/Qme1E49DEyeGRmT2CDeSCZRcNiLyeAQiDq7SAxDHACiivi/" />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
