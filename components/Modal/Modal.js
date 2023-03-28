import { FormGroup, InputAdornment, Modal, TextField } from "@mui/material";

import { CloseModal } from "../CloseModal/CloseModal";

export const ModalComponent = (props) => {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <div className="modal__wrapper">
        <div className="modal__content topline topline-35">
          {props.children}
          {/* <ButtonClose onClick={props.handleClose}>Close</ButtonClose> */}
          <CloseModal onClick={props.handleClose} />
        </div>
      </div>
    </Modal>
  );
};
