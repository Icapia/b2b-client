import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ChatAction from '../../public/image/sidebar-icons/ChatAction.svg';
import { Modal } from '@mui/material';
import Message from '../Messages/Message';
import Close from '../../public/image/sidebar-icons/Close.svg';
import { useState } from 'react';

const ButtonChat = styled(Button)(({ theme }) => ({
  fontSize: 14,
  width: "45px",
  height: "45px",
  minWidth: "45px",
  border: '0px',
  lineHeight: 1.15,
  backgroundColor: '#E68512',
  borderColor: '#E68512',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#CF895D',
    borderColor: '#E3B687',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#CF895D',
    borderColor: '#CF895D',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
const ButtonFrozzen = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: '0px',
  lineHeight: 1.15,
  minHeight: "45px",
  backgroundColor: '#47E790',
  borderColor: '#47E790',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  color: "#FFF",
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#2ED97C',
    borderColor: '#2ED97C',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#2ED97C',
    borderColor: '#2ED97C',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
const ButtonBlocked = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: '0px',
  lineHeight: 1.15,
  minHeight: "45px",
  backgroundColor: '#FFB946',
  borderColor: '#FFB946',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  color: "#FFF",
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#F6AA2B',
    borderColor: '#F6AA2B',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#F6AA2B',
    borderColor: '#F6AA2B',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
const ButtonDelete = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: '0px',
  minHeight: "45px",
  lineHeight: 1.15,
  backgroundColor: '#FA7F73',
  borderColor: '#FA7F73',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  color: "#FFF",
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#F86B5E',
    borderColor: '#F86B5E',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#F86B5E',
    borderColor: '#F86B5E',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
const ButtonClose = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: '#FFF',
  borderColor: '#FFF',
  color: '#A7A6A6',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: 'none',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    boxShadow: 'none',
    color: '#E3B687'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
  },
  '&:focus': {
  },
}));
const ButtonDefault = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: '#E68512',
  borderColor: '#E68512',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#CF895D',
    borderColor: '#E3B687',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#CF895D',
    borderColor: '#CF895D',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));

export default function UserActions(props) {
  const user = props.user;
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({
    modalText: "Are you sure you want to frozen the following users?",
    modalBtn: "Blocked User",
    func: ''
  });
  
  const AlertModal = (props) => {
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    });
    
    return (  
      <Modal open={open} onClose={handleClose}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Notification</h2>
            <p>Action confirmation</p>
            <h5>{props.modal.modalText}</h5>
            <div className="modal__content-form">
              <div className="modal__content-user">
                <span>{"#" + user.id + " " + user.firstname + " " + user.lastname}</span> 
                <span>{user.email}</span>
              </div>
            </div>
            <ButtonClose 
              className='button-close mr-15'
              variant="contained" 
              onClick={() => { handleClose(); }}>
              Close
            </ButtonClose>
            <ButtonDefault
              className='button-default'
              variant="contained"
              onClick={ async () => { 
                setMessage({
                  className: 'messageBox open',
                  message: 'Status Updated!'
                });
                setTimeout(() => {
                  setMessage({
                    className: 'messageBox',
                    message: 'Status Updated!'
                  });
                  props.modal.func(user);
                }, 2500);
                setTimeout(() => {
                  setOpen(false);
                }, 1500);
              }}>
              {props.modal.modalBtn}
            </ButtonDefault>
            <div 
              className="modal__close"
              onClick={() => { handleClose(); }}>
              <Close width={24} height={24}></Close>
            </div>
          </div>
        <Message className={message.className} message={message.message}></Message>
        </div>
      </Modal>
    );
  }
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="userProfile__avatar topline mt-25">
      <h4>Actions</h4>
      <p>Require confirmation for each action</p>
      
      <div className="userProfile__avatar-buttons">
        <Link className="userProfile__avatar-btn" href="/chats/1">
          <a>
            <ButtonChat width={45} height={45}>
              <ChatAction width={24} height={24}></ChatAction>
            </ButtonChat>
          </a>
        </Link>
        
        <ButtonFrozzen className="userProfile__avatar-btn" 
        onClick={() => { 
          setModal({
            modalText: "Are you sure you want to frozen the following user?",
            modalBtn: "Frozen User",
            func: frozzenUser
          });
          handleOpen(); 
        }}>
          Frozen Users
        </ButtonFrozzen>
        <ButtonBlocked className="userProfile__avatar-btn"
        onClick={() => { 
          setModal({
            modalText: "Are you sure you want to block the following user?",
            modalBtn: "Blocked User",
            func: blockedUser
          });
          handleOpen(); 
        }}>
          Blocked Users
        </ButtonBlocked>
        <ButtonDelete className="userProfile__avatar-btn"
        onClick={() => { 
          setModal({
            modalText: "Are you sure you want to delete the following user?",
            modalBtn: "Delete User",
            func: deleteUser
          });
          handleOpen(); 
        }}>
          Delete Users
        </ButtonDelete>
        <AlertModal modal={modal}/>
      </div>
    </div>
  )
}

async function frozzenUser(user) {
  try {
    fetch(`http://localhost:4200/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "accStatus": 2,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "gender": user.gender,
        "phone": user.phone,
        "email": user.email,
        "registrationDate": user.registrationDate,
        "birthday": user.birthday,
        "country": user.country
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function blockedUser(user) {
  try {
    fetch(`http://localhost:4200/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "accStatus": 4,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "gender": user.gender,
        "phone": user.phone,
        "email": user.email,
        "registrationDate": user.registrationDate,
        "birthday": user.birthday,
        "country": user.country
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteUser(user) {
  try {
    fetch(`http://localhost:4200/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "accStatus": 0,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "gender": user.gender,
        "phone": user.phone,
        "email": user.email,
        "registrationDate": user.registrationDate,
        "birthday": user.birthday,
        "country": user.country
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.log(error);
    return false;
  }
}



