import { Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Message from '../../Messages/Message';
import Close from '../../../public/image/sidebar-icons/Close.svg';
import EditSvg from '../../../public/image/Edit.svg';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';

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
const ButtonEdit = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '5px',
  width: 45,
  height: 45,
  minWidth: 45,
  border: '1px solid #E6E6E6',
  lineHeight: 1.15,
  backgroundColor: '#fff',
  borderColor: '#E6E6E6',
  borderRadius: "50%",
  textTransform: "none",
  boxShadow: 'none',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#CF895D',
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: '#fff',
    borderColor: '#CF895D',
    boxShadow: 'none',
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
    color: '#E68512',
  },
  '& label.Mui-focused': {
    color: '#E68512',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#E68512',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      transition: '.15s linear',
      borderColor: '#E6E6E6',
    },
    '&:hover fieldset': {
      borderColor: '#E68512',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E68512',
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


export default function GlobalSettingsModalSelect(props) {
  const [open, setOpen] = useState(false);
  const key = props.keyValue;
  
  const SettingsModal = () => {
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })
    
    const [localSettings, setLocalSettings] = useState(props.settings)
    
    const updateSettings = (event, itemKey, noTarget) => {
      if(noTarget == true) {
        let settingsCopy = JSON.parse(JSON.stringify(localSettings));
        settingsCopy[itemKey] = event;
        setLocalSettings(settingsCopy);
      } else {
        let settingsCopy = JSON.parse(JSON.stringify(localSettings));
        settingsCopy[itemKey] = event.target.value;
        setLocalSettings(settingsCopy);
      }
    };
    
    
    return (
      <Modal open={open} onClose={handleClose}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>{props.title}</h2>
            <div className="modal__content-form modal__content-form--fullw">
              <FormControl className='modal__content-formItem' fullWidth>
                  <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                  <CssSelectField
                    
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={localSettings.lang}
                    label={props.label}
                    onChange={(event) => {
                      updateSettings(event, key, false);
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
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Russian">Russian</MenuItem>
                  </CssSelectField>
                </FormControl>
            </div>
            <ButtonClose 
              className='button-close mt-20 mr-15'
              variant="contained" 
              onClick={() => { handleClose(); }}>
              Close
            </ButtonClose>
            <ButtonDefault
              className='button-default mt-20'
              margin="40px 0px 0px 0px" 
              variant="contained" 
              onClick={ async () => { 
                let res = await handleUpdateProfile(props.settings);
                if (res) {
                  setMessage({
                    className: 'messageBox open',
                    message: 'Settings Updated!'
                  });
                  setTimeout(() => {
                    setMessage({
                      className: 'messageBox',
                      message: 'Settings Updated!'
                    });
                  }, 2500);
                  setTimeout(() => {
                    props.onEdit(localSettings)
                    setOpen(false);
                  }, 1500);
                }
              }}>
              Update
            </ButtonDefault>
            <div className="modal__close"
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
      <ButtonEdit
        className='btn-edit'
        variant="contained"
        onClick={() => {
          handleOpen();
        }}>
        <EditSvg width={24} height={24}></EditSvg>
      </ButtonEdit>
      <SettingsModal />
    </div>
  );
};

export async function handleUpdateProfile(settings) {
  try {
    return true;
  } catch (error) {
    return false;
  }
}