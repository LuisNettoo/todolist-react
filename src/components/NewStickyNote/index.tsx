import { AiOutlinePlus } from "react-icons/ai";
import { Container } from "./styles";
import Modal from "react-modal";
import { useState } from "react";
import { StickyNoteForm } from "../../pages/StickyNoteForm";

Modal.setAppElement("#root");

export function NewStickyNote() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container onClick={openModal}>
        <AiOutlinePlus />
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <StickyNoteForm closeModal={closeModal} />
      </Modal>
    </>
  );
}
