import { FC, PropsWithChildren } from "react";
import { Modal } from "@mui/material";
import Close from '../../public/image/sidebar-icons/Close.svg'

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
          <div onClick={onRequestClose} className="modal__close">
            <Close onClick={onRequestClose} width={24} height={24}></Close>
          </div>
        </div>
      </div>
    </Modal>
  );
};
