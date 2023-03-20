import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Message from '../Messages/Message';
import { useState } from 'react';

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
    boxShadow: 'none',
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
    boxShadow: 'none',
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
    boxShadow: 'none',
    backgroundColor: '#F86B5E',
    borderColor: '#F86B5E',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));

export default function VereficatonActions(props) {
  const [message, setMessage] = useState({
    className: 'messageBox',
    message: '',
  });
  
  return (
    <div className="userProfile__avatar topline mt-25">
      <h4>Actions</h4>
      <p>Require confirmation for each action</p>
      
      <div className="userProfile__avatar-buttons userProfile__avatar-Vbuttons">
        <ButtonFrozzen 
        className="userProfile__avatar-btn"
        onClick={() => {
          setMessage({
            className: 'messageBox open',
            message: 'Verefication Apply'
          });
          setTimeout(() => {
            setMessage({
              className: 'messageBox',
              message: 'Verefication Apply'
            });
          }, 1500);
        }}
        >
          Verify Identity User
        </ButtonFrozzen>
        <ButtonBlocked 
        className="userProfile__avatar-btn"
        onClick={() => {
          setMessage({
            className: 'messageBox open',
            message: 'Verefication Deny'
          });
          setTimeout(() => {
            setMessage({
              className: 'messageBox',
              message: 'Verefication Deny'
            });
          }, 1500);
        }}
        >
          Deny Verification
        </ButtonBlocked>
        <ButtonDelete 
        className="userProfile__avatar-btn"
        onClick={() => {
          setMessage({
            className: 'messageBox open',
            message: 'User Blocked'
          });
          setTimeout(() => {
            setMessage({
              className: 'messageBox',
              message: 'User Blocked'
            });
          }, 1500);
        }}
        >
          Blocked Users
        </ButtonDelete>
      </div>
      <Message className={message.className} message={message.message}></Message>
    </div>
  )
}