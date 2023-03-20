import { Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Message from '../../Messages/Message';
import Close from '../../../public/image/sidebar-icons/Close.svg';

const ButtonDefault = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: '#D89972',
  borderColor: '#D89972',
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
    boxShadow: 'none',
    backgroundColor: '#CF895D',
    borderColor: '#CF895D',
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
const CssTextField = styled(TextField)({
  '& label': {
    color: '#A7A6A6',
    fontFamily: 'Poppins'
  },
  '& label.Mui-hover': {
    color: '#D89972',
  },
  '& label.Mui-focused': {
    color: '#D89972',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D89972',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      transition: '.15s linear',
      borderColor: '#E6E6E6',
    },
    '&:hover fieldset': {
      borderColor: '#D89972',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D89972',
    },
  },
  '& .Mui-disabled': {
    transition: '.15s linear',
    borderColor: '#E6E6E6',
  },
});
const CssSelectField = styled(Select)({
  label: {
    color: "A7A6A6 !important",
    "&.Mui-focused": {
      color: "D89972 !important",
    },
  },
});

export default function EditUserModal(props) {
  const [open, setOpen] = useState(false);
  const EditModal = () => {
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })
    
    const [localUserData, setLocalUserData] = useState(props.user);
    
    const updateUserData = (event, itemKey, noTarget) => {
      if(noTarget == true && itemKey == 'birthday') {
        let userDataCopy = JSON.parse(JSON.stringify(localUserData));
        userDataCopy[itemKey] = event;
        setLocalUserData();
        setLocalUserData(userDataCopy);
      } else if(noTarget == true && itemKey == 'country') {
        let userDataCopy = JSON.parse(JSON.stringify(localUserData));
        userDataCopy[itemKey] = event;
        setLocalUserData();
        setLocalUserData(userDataCopy);
      } else {
        let userDataCopy = JSON.parse(JSON.stringify(localUserData));
        userDataCopy[itemKey] = event.target.value;
        setLocalUserData();
        setLocalUserData(userDataCopy);
      }
      
    };
    
    return (
      <Modal open={open} onClose={handleClose}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Profile Editing</h2>
            <h5>Personal Information</h5>
            <div className="modal__content-form">
              <FormControl className='modal__content-formGroup' fullWidth variant="standard">
                <CssTextField
                className='modal__content-formItem'
                fullWidth={true}
                label="First Name"
                defaultValue={localUserData.firstname} 
                onChange={(event) => {
                  updateUserData(event, 'firstname', false);
                }} 
                />
                <CssTextField
                className='modal__content-formItem'
                fullWidth={true}
                label="Full Name (Cyrylic)" 
                defaultValue={localUserData.firstname + ' ' + localUserData.lastname} 
                disabled 
                />
                <CssTextField
                className='modal__content-formItem'
                fullWidth={true}
                label="Phone Number" 
                defaultValue={localUserData.phone} 
                onChange={(event) => {
                  updateUserData(event, 'phone', false);
                }} 
                />
                <div className="modal__content-formItem">
                  <LocalizationProvider fullWidth={true} dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker 
                      label="Date of birth"
                      fullWidth={true}
                      inputFormat="dd/MM/yyyy"  
                      value={localUserData.birthday}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(event) => {
                        updateUserData(getDateFormat(event), 'birthday', true);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </FormControl>
              <FormControl className='modal__content-formGroup' fullWidth variant="standard">
                <CssTextField
                  className='modal__content-formItem'
                  fullWidth={true}
                  label="Last Name" 
                  defaultValue={localUserData.lastname} 
                  onChange={(event) => {
                    updateUserData(event, 'lastname', false);
                  }} 
                />
                <CssTextField
                  className='modal__content-formItem'
                  fullWidth={true}
                  label="Email" 
                  defaultValue={localUserData.email} 
                  onChange={(event) => {  
                    updateUserData(event, 'email', false);
                  }} 
                />
                <FormControl className='modal__content-formItem' fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <CssSelectField
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={localUserData.gender}
                    label="Gender"
                    onChange={(event) => {
                      updateUserData(event, 'gender', false);
                    }} 
                    
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: '#FFF',
                          '& .MuiMenuItem-root': {
                            padding: '10px 14px',
                          },
                          '& .Mui-selected' : {
                          }
                        },
                      },
                    }}
                  >
                    <MenuItem value="No value">No value</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </CssSelectField>
                </FormControl>
                
                <CssTextField
                  className='modal__content-formItem'
                  fullWidth={true}
                  label="Country" 
                  defaultValue={localUserData.country} 
                  onChange={(event) => {  
                    updateUserData(event, 'country', true);
                  }} 
                />
              </FormControl>
            </div>
            <ButtonClose 
              className='button-close mt-40 mr-15'
              variant="contained" 
              onClick={() => { handleClose(); }}>
              Close
            </ButtonClose>
            <ButtonDefault
              className='button-default mt-40'
              margin="40px 0px 0px 0px" 
              variant="contained" 
              onClick={ async () => { 
                let res = await handleUpdateProfile(props.user);
                if (res) {
                  setMessage({
                    className: 'messageBox open',
                    message: 'Profile Updated!'
                  });
                  setTimeout(() => {
                    setMessage({
                      className: 'messageBox',
                      message: 'Profile Updated!'
                    });
                  }, 2500);
                  setTimeout(() => {
                    props.onEdit(localUserData)
                    setOpen(false);
                  }, 1500);
                }
              }}>
              Update
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
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <ButtonDefault 
        className='mt-20'
        variant="contained"
        onClick={() => {
          handleOpen();
        }}>
        Edit Profile Information
      </ButtonDefault>
      <EditModal />
    </div>
  );
};

export async function handleUpdateProfile(userData) {
  try {
    const res = await fetch(`http://localhost:4200/users/${userData.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "firstname": userData.firstname,
        "lastname": userData.lastname,
        "gender": userData.gender,
        "phone": userData.phone,
        "email": userData.email,
        "registrationDate": userData.registrationDate,
        "birthday": userData.birthday,
        "country": userData.country
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const response = await res.json();
    return response;
  } catch (error) {
    return false;
  }
}

function getDateFormat(date) {
  const nDate = new Date(date);
  const nDateDay = nDate.getDate() < 10 ? '0' + nDate.getDate() : nDate.getDate();
  const nDateMonth = (nDate.getMonth() + 1) < 10 ? '0' + (nDate.getMonth() + 1) : (nDate.getMonth() + 1);
  return(nDate.getFullYear() + '-' + nDateMonth + '-' + nDateDay);
}