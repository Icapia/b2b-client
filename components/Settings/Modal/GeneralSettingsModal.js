import { Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Message from '../../Messages/Message';
import Close from '../../../public/image/sidebar-icons/Close.svg';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TimePicker from '@mui/lab/TimePicker';

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

export default function GeneralSettingsModal(props) {
  const [open, setOpen] = useState(false);
  const SettingsModal = () => {
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })
    
   
    
    const createDateFromTextValue = value => {
      const splitParts = value.split(':');
      return new Date(1970, 1, 1, splitParts[0], splitParts[1]);
    }
    
    const [localSettings, setLocalSettings] = useState(props.settings);
    
    useEffect(() => {
      return () => {
        setLocalSettings({  });
      };
    }, []);
    
    const updateSettings = (event, itemKey, noTarget) => {
      if(noTarget == true) {
        var newDate = new Date(event);
        let settingsCopy = JSON.parse(JSON.stringify(localSettings));
        settingsCopy[itemKey] = newDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
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
            <h2>Settings Editing</h2>
            <h5>Currents Settings</h5>
            <div className="modal__content-form modal__content-form--fullw">
              <FormControl className='modal__content-formGroup' fullWidth variant="standard">
                <CssTextField
                className='modal__content-formItem'
                fullWidth={true}
                label="Support Email"
                defaultValue={props.settings.supportMail} 
                onChange={(event) => {
                  updateSettings(event, 'supportMail', false);
                }} 
                />
                <CssTextField
                className='modal__content-formItem'
                fullWidth={true}
                label="Support Phones" 
                defaultValue={props.settings.supportPhones} 
                onChange={(event) => {
                  updateSettings(event, 'supportPhones', false);
                }} 
                />
                
                <div className="modal__content-formItem">
                  <LocalizationProvider fullWidth={true} dateAdapter={AdapterDateFns}>
                    <TimePicker
                      ampm={false}
                      label="Work Time (Start)"
                      value={createDateFromTextValue(localSettings.workTimeStart)}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(event) => {
                        updateSettings(event, 'workTimeStart', true);
                      }}
                    />
                  </LocalizationProvider>
                </div>
                
                <div className="modal__content-formItem">
                  <LocalizationProvider fullWidth={true} dateAdapter={AdapterDateFns}>
                    <TimePicker
                      ampm={false} 
                      label="Work Time (End)"
                      value={createDateFromTextValue(localSettings.workTimeEnd)}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(event) => {
                        updateSettings(event, 'workTimeEnd', true);
                      }}
                    />
                  </LocalizationProvider>
                </div>
                
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
        Edit General Settings
      </ButtonDefault>
      <SettingsModal />
    </div>
  );
};

export async function handleUpdateProfile(settings) {
  try {
    const res = await fetch(`http://localhost:4200/settings`, {
      method: "PATCH",
      body: JSON.stringify({
        "global": {
          "email": settings.email,
          "phone": settings.phone,
          "lang": settings.lang
        },
        "general": {
          "supportMail": settings.supportMail,
          "supportPhones": settings.supportPhones,
          "workTime": {
            "start": settings.workTimeStart,
            "end": settings.workTimeEnd
          }
        }
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