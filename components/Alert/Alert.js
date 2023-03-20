import { Modal } from '@mui/material';
import { useContext } from 'react';
const AlertState = useContext(false);

export default function Alert(props) {
  const [open, setOpen] = useState(AlertState);
  
  const AlertModal = () => {
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })
    
    return (
      <Modal open={open} onClose={handleClose}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Notification</h2>
            <h5>Are you sure you want to frozen the following users?</h5>
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
                  setOpen(false);
                }, 1500);
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