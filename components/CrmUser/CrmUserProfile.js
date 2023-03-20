import {useState} from "react";
import {FormGroup, InputAdornment, Modal, TextField} from "@mui/material";
import {ButtonClose, ButtonDefault} from "../Buttons/Buttons";
import {CloseModal} from "../CloseModal/CloseModal";
import Message from "../Messages/Message";

export default function CrmUserProfile(props) {
  const user = props.user;
  console.log(user);
  const handlerUpdate = (user) => {
    if(user) {
      props.onChange(user)
    }
  }

  return (
    <div className="userProfile__profileInfo topline mt-25">
      <h4>Profile Information</h4>
      <span className="devider"></span>

      <div className="userProfile__profileInfo-table">
        <div className="userProfile__profileInfo-item">
          <span>Username</span>
          <span className="userProfile__profileInfo-value">{user.firstname + ' ' + user.lastname}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Email</span>
          <span className="userProfile__profileInfo-value">{user.email}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Phone</span>
          <span className="userProfile__profileInfo-value">{user.phone}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Gender</span>
          <span className="userProfile__profileInfo-value">{user.gender}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Date of birth</span>
          <span className="userProfile__profileInfo-value">{user.birthday}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Registration Date</span>
          <span className="userProfile__profileInfo-value">{user.registrationDate}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Country</span>
          <span className="userProfile__profileInfo-value">{user.country}</span>
        </div>
      </div>

      <EditUser
        user={user}
        onChange={(user) => handlerUpdate(user)}
      />
    </div>
  )
}

const EditUser = (props) => {
  const [open, setOpen] = useState(false);
  const handlerClose = () => { setOpen(false) }
  const handlerOpen = () => { setOpen(true) }

  const ModalBox = () => {
    const [form, setForm] = useState(props.user);
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })

    const handlerChange = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
    }

    const handlerUpdate = () => {
      props.onChange({...form})

      setMessage({
        className: 'messageBox open',
        message: 'Profile Updated',
      })
      setTimeout(() => {
        handlerClose();
        setMessage({
          className: 'messageBox',
          message: '',
        })
      }, 1500)
    }

    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Edit User: <span className={"brown"}>{ props.user.firstname + " " + props.user.lastname }</span></h2>
            <h5>Personal Information</h5>
            <div className="modal__content-form modal__content-form--fullw mxw-700">
              <FormGroup className='modal__content-formGroup col-2'>
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-w"}
                  autoFocus={true}
                  focused={true}
                  name={'firstname'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'First Name'}
                  defaultValue={form.firstname}
                  placeholder={"Enter First Name"}
                  onChange={(event) => handlerChange(event)}
                />

                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-w"}
                  autoFocus={true}
                  focused={true}
                  name={'lastname'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Last Name'}
                  defaultValue={form.lastname}
                  placeholder={"Enter Last Name"}
                  onChange={(event) => handlerChange(event)}
                />

                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-w"}
                  focused={true}
                  name={'email'}
                  defaultValue={form.email}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Email'}
                  placeholder={"example@gmail.com"}
                  onChange={(event) => handlerChange(event)}
                />

                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-w"}
                  focused={true}
                  name={'phone'}
                  defaultValue={form.phone}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Phone Number'}
                  placeholder={"+0 (000) 000-00-00"}
                  onChange={(event) => handlerChange(event)}
                />



              </FormGroup>
            </div>
            <ButtonDefault className='mr-15' onClick={handlerUpdate}>Update Profile</ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <CloseModal onClick={handlerClose} />
          </div>
          <Message className={message.className} message={message.message}></Message>
        </div>
      </Modal>
    )
  }

  return (
    <>
      <ButtonDefault onClick={handlerOpen} className='mt-25'>
        Edit Profile
      </ButtonDefault>
      <ModalBox/>
    </>
  );
}



