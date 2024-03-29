import { Modal } from "@mui/material";
import { FC, PropsWithChildren } from "react";

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
            <img width={24} height={24} src="/b2b/image/sidebar-icons/Close.svg" alt="" />
          </div>
        </div>
      </div>
    </Modal>
  );
};
