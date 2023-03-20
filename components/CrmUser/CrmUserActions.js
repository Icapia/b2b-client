import Link from "next/link";
import ChatAction from "../../public/image/sidebar-icons/ChatAction.svg";
import {ButtonDelete, ButtonChat, ButtonFrozzen, ButtonBlocked, ButtonDefault, ButtonClose} from "../Buttons/Buttons"
import {useState} from "react";
import {FormGroup, Modal, TextField} from "@mui/material";
import {CloseModal} from "../CloseModal/CloseModal";
import Message from "../Messages/Message";

export default function CrmUserActions (props) {
  const [modal, setModal] = useState();
  const [open, setOpen] = useState(false);
  const handlerClose = () => { setOpen(false) }
  const handlerOpen = () => { setOpen(true) }

  const user = props.user;

  const ModalBox = () => {
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })

    const handlerChange = (event) => {

    }

    const handlerUpdate = () => {

    }

    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Notification</h2>
            <p>Action confirmation</p>
            <h5></h5>
            <div className="modal__content-form">
              <div className="modal__content-user">
                <span>{"#" + user.id + " " + user.firstname + " " + user.lastname}</span>
                <span>{user.email}</span>
              </div>
            </div>
            <ButtonDefault>Apply</ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <CloseModal onClick={handlerClose} />
          </div>
          <Message className={message.className} message={message.message}></Message>
        </div>
      </Modal>
    )
  }


  //Return Buttons List
  return (
    <div className="userProfile__avatar topline mt-25">
      <h4>Actions</h4>
      <p>Require confirmation for each action</p>
      <div className="userProfile__avatar-buttons">
        <ButtonFrozzen
          className=""
          onClick={() => {

          }}
        >
          Frozen Users
        </ButtonFrozzen>
        <ButtonBlocked
          className=""
        >
          Blocked Users
        </ButtonBlocked>
        <ButtonDelete
          className=""
        >
          Delete Users
        </ButtonDelete>
        <ModalBox/>
      </div>
    </div>
  )
}


