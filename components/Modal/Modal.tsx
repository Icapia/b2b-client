import { FC, PropsWithChildren } from "react";
import { Modal } from "@mui/material";
import { CloseModal } from "../CloseModal/CloseModal";

interface ModalI {
  isOpen: boolean,
  onRequestClose: () => void,
}

export const ModalComponent: FC<PropsWithChildren<ModalI>> = ({
  children,
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <div className="modal__wrapper">
        <div className="modal__content topline topline-35">
          {children}
          <CloseModal onClick={onRequestClose} />
        </div>
      </div>
    </Modal>
  );
};
