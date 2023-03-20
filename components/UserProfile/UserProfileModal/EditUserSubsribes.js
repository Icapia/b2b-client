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

export default function EditUserSubscribes() {
  const [open, setOpen] = useState(false);
  const EditSubscribes = () => {
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })
    
    return (
      <Modal open={open} onClose={handleClose}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Subscribes Editing</h2>
            <h5>Subscribe Info:</h5>
            <div className="modal__content-form modal__content-form--fullw">
              <FormControl className='modal__content-formItem' fullWidth>
                <InputLabel id="demo-simple-select-label">Subscribe</InputLabel>
                <CssSelectField
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Subscribe"
                  onChange={(event) => {
                    
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
              <FormControl className='modal__content-formItem' fullWidth>
                <LocalizationProvider fullWidth={true} dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker 
                        label="Valid until"
                        fullWidth={true}
                        inputFormat="dd/MM/yyyy"  
                        renderInput={(params) => <TextField {...params} />}
                        onChange={(event) => {

                        }}
                      />
                </LocalizationProvider>  
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
              variant="contained">
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
        Edit Subscribes
      </ButtonDefault>
      <EditSubscribes />
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