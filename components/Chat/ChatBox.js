import Image from "next/image"
import userImage from '../../public/image/user-avatar-m.png';
import {ButtonClose, ButtonDefault, ButtonTransparent} from '../Buttons/Buttons';
import { useContext, useEffect, useState } from "react";
import ChatContext from "../Context/ChatContext";
import { useHttp } from "../../hooks/http.hook";
import {Modal, TextField} from "@mui/material";
import AuthContext from "../Context/AuthContext";
import FormControl from "@mui/material/FormControl";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import {CloseModal} from "../CloseModal/CloseModal";
import {styled} from "@mui/material/styles";
import Select from "@mui/material/Select";
import Message from "../Messages/Message";
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

export function ChatContainer(props) {
  const { chat, setChat } = useContext(ChatContext);
  const { loading, request, error, clearError } = useHttp();
  const [messages, setMessages] = useState();
  const [user, setUser] = useState();
  const [crmUser, setCrmUser] = useState();
  const { userId, token } = useContext(AuthContext);
  const [enter, setEnter] = useState(true)

  const getMessages = async (id) => {
    try {
      const response = await request(`http://localhost:4200/chats/${id}`, 'GET')

      if(!loading) {
        const result = await response;
        return result;
      }

    } catch (e) { console.log('Error', e.message) }
  }
  const getUser = async (id) => {
    try {
      const response = await request(`http://localhost:4200/users/${id}`, 'GET')

      if(!loading) {
        const result = await response;
        return result;
      }

    } catch (e) { console.log('Error', e.message) }
  }
  const getCrmUser = async (id) => {
    try {
      const response = await request(`http://localhost:4200/crmUsers/${id}`, 'GET')

      if(!loading) {
        const result = await response;
        return result;
      }

    } catch (e) { console.log('Error', e.message) }
  }
  useEffect(async () => {
    if(chat) {
      const chatMessages = await getMessages(chat)
      if(await chatMessages) {
        setMessages(chatMessages);
      }
    }
  }, [chat])
  useEffect(async () => {
    if(messages) {
      const user = await getUser(messages.userId);
      if(await user) {
        setUser(user)
      }
    }
  }, [chat])
  useEffect(async () => {
    if(messages) {
      const user = await getCrmUser(userId);
      if(await user) {
        setCrmUser(user)
        console.log(crmUser)
      }
    }
  }, [chat])

  const handlerAddMessage = (e) => {
    const text = e.target.value;
    const symbols = text.replace(/ /g, '').replace(/\r?\n/g, '').length
    if(symbols < 3) {
      return;
    }

    if(e.key == "Enter" && !e.shiftKey) {
      setEnter(false)
      const index = messages.messages.length;
      const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      const date = new Date().toISOString().substring(0, 10);

      const currentMessage = {
        id: index,
        userId: userId,
        text: e.target.value,
        date: date + ' ' + time
      }

      sendMessage(currentMessage, chat)

      setMessages({...messages, ...messages["messages"][index] = currentMessage})
      setTimeout(() => {
        let block = document.querySelector('.ChatMessages__content');
        block.scrollTop = block.scrollHeight;
        setEnter(true);

      }, 100)
    }
  }

  const sendMessage = async (message, chat) => {
    try {
      const response = await request(`http://localhost:4200/chats/${chat}`, 'PUT', ...messages)
      const result = await response;
    } catch (e) {}
  }

  const ChatEnterField = (props) => {
    return (
      <div className={"ChatMessages__enter"}>
        <TextField
          multiline={true}
          className={"ChatMessages__field"}
          name={"enterMessage"}
          type={"text"}
          onKeyDown={(event) => handlerAddMessage(event)}
          placeholder={"Type a message..."}
        />
      </div>
    )
  }

  return (
    <div className={"ChatMessages " + props.className}>
      <div className="ChatMessages__header">
        <h6>Theme: <span>{ messages ? messages.theme : '' }</span></h6>
        <div className="ChatMessages__header-user">
          <span>{ user ? user.firstname + ' ' + user.lastname : ''}</span>
          <div className="ChatMessages__header-image">
            <Image src={ user ? `http://localhost:3000/image/${user.avatarUrl}` : userImage} width={24} height={24}></Image>
          </div>
          <span className={"status"}></span>
        </div>
      </div>

      <div className="ChatMessages__box">
        <div className="ChatMessages__content">
        {
          messages ?
            messages.messages.map((item, index) => {
              return ( <ChatMessage content={item} user={user} crmUser={crmUser} key={index} /> )
            }) : ''
        }
        </div>
      </div>
      <ChatEnterField/>

      <div className="ChatMessages-btn mt-40">
        <ButtonDefault
          className={"mr-15"}
        >
          Close Topic
        </ButtonDefault>
        <Information user={user} messages={messages}/>

      </div>

    </div>
  )
}

const ChatMessage = (props) => {
  const message = props.content || null;
  const user = props.user || null;
  const crmUser = props.crmUser || null;

  const currentDate = new Date();
  const inputDate = new Date(message.date);

  const date = (currentDate.toLocaleDateString() === inputDate.toLocaleDateString()) ?
    inputDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) :
    inputDate.toISOString().substring(0, 10) + ' ' + inputDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  const newMessage = (currentDate.toLocaleDateString() === inputDate.toLocaleDateString()) ? 'newMessage' : '';


  if(message && user && crmUser) {
    if(message.userId == user.id) {
      return (
        <div className={"Message left brown"}>
          <div className="Message__header">
            <div className="Message__user">
              <h6> { user ? user.firstname + ' ' + user.lastname : '' } </h6>
              <div className={"Message__user-image"}>
                <Image width={20} height={20} src={ user ? `http://localhost:3000/image/${user.avatarUrl}` : userImage } />
              </div>
            </div>
            <span> { date || '' } </span>
          </div>
          <div className={"Message__content"}>
            { message.text || '' }
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={"Message right white " + newMessage}>
          <div className="Message__header">
            <div className="Message__user">
              <h6> { user ? 'You' : 'You' } </h6>
              <div className={"Message__user-image"}>
                <Image width={20} height={20} src={ user ? `http://localhost:3000/${crmUser.avatar}` : userImage } />
              </div>
            </div>
            <span> { date || '' } </span>
          </div>
          <div className={"Message__content"}>
            { message.text || '' }
          </div>
        </div>
      )
    }
  } else {
    return ( <></> )
  }
}

const Information = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    className: 'messageBox',
    message: '',
  })

  const handlerClose = () => { setOpen(false) }
  const handlerOpen = () => { setOpen(true) }

  const handlerUpdate = (form) => {
    setMessage({
      className: 'messageBox open',
      message: 'Profile Updated!',
    })

    setTimeout(() => {
      setMessage({
        className: 'messageBox',
        message: '',
      })
      handlerClose();
    }, 1500)
  }

  const user = props.user || null;
  const messages = props.messages || null;

  const ModalBox = () => {
    if(user !== null && messages !== null) {
      return (
        <Modal open={open} onClose={handlerClose}>
          <div className="modal__wrapper modal__wrapper--information">
            <div className="modal__content mxw-700 topline topline-35">
              <div className="tags">
                <span>Date: 22.01.2022</span>
                <span>Time: 16:23</span>
              </div>
              <h2>Theme: <span>Authorization Error</span></h2>
              <h5>Description:</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie. Ligula ullamcorper malesuada proin libero nunc consequat interdum. A lacus vestibulum sed arcu non odio euismod lacinia. Aliquet eget sit amet tellus cras adipiscing enim.
              </p>

              <h5>Personal Information</h5>
              <div className="modal__content-form">
                <FormControl className='modal__content-formGroup' fullWidth variant="standard">
                  <CssTextField
                    className='modal__content-formItem'
                    fullWidth={true}
                    label="First Name"
                    defaultValue={user.firstname}
                  />
                  <CssTextField
                    className='modal__content-formItem'
                    fullWidth={true}
                    label="Full Name (Cyrylic)"
                    defaultValue={user.firstname + ' ' + user.lastname}
                    disabled
                  />
                  <CssTextField
                    className='modal__content-formItem'
                    fullWidth={true}
                    label="Phone Number"
                    defaultValue={user.phone}
                  />
                  <div className="modal__content-formItem">
                    <LocalizationProvider fullWidth={true} dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Date of birth"
                        fullWidth={true}
                        inputFormat="dd/MM/yyyy"
                        value={user.birthday}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </FormControl>
                <FormControl className='modal__content-formGroup' fullWidth variant="standard">
                  <CssTextField
                    className='modal__content-formItem'
                    fullWidth={true}
                    label="Last Name"
                    defaultValue={user.lastname}
                  />
                  <CssTextField
                    className='modal__content-formItem'
                    fullWidth={true}
                    label="Email"
                    defaultValue={user.email}
                  />
                  <FormControl className='modal__content-formItem' fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <CssSelectField
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={user.gender}
                      label="Gender"
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
                    defaultValue={user.country}
                  />
                </FormControl>
              </div>
              <ButtonDefault className='mr-15' onClick={handlerUpdate }>Update Profile</ButtonDefault>
              <ButtonClose onClick={handlerClose}>Close</ButtonClose>
              <CloseModal onClick={handlerClose} />
            </div>
          </div>
          {/*<Message className={message.className} message={message.message}/>*/}
        </Modal>
      )
    } else {
      return <></>
    }
  }

  return (
    <>
      <ButtonTransparent onClick={handlerOpen} className='mr-15'>
        View information
      </ButtonTransparent>
      <ModalBox/>
    </>
  );
}

