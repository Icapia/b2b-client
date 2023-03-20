import { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade'
const ButtonDefault = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: '#D89972',
  borderColor: '#D89972',
  borderRadius: 3,
  textTransform: "none",
  color: "#FFFFFF",
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

export default function Notification(props) {
  const title = props.title;
  const posts = props.posts;
  const [btnText, setBtnText] = useState('Hide all notifications');
  const [fade, setFade] = useState(true);
  const [className, setClassName] = useState('notifications__list');
  
  const handleFade = () => {
    setFade((prev) => !prev);
    setBtnText((text) => text == "Display all notifications" ? "Hide all notifications" : "Display all notifications");
    setClassName((text => text == 'notifications__list' ? 'notifications__list hidden' : 'notifications__list'))
  };
  
  
  return (
    
    <div className={"notifications "}>
      <div className="notifications__header">
        <h4>{title}</h4>
        <ButtonDefault
        onClick={handleFade}>
        {btnText}
        </ButtonDefault>
      </div>
      <Fade in={fade}>
        <div className={className ? className : ''}>
          {
            Array.from(posts).map((item, index) => {
              return (
                <div key={index} className="notifications__item">
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                </div>
              )
            })
          }
        </div>
      </Fade>
    </div>
  )
}