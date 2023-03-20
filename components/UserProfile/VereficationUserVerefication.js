import Link from 'next/link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const ButtonDefault = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: '#D89972',
  borderColor: '#D89972',
  borderRadius: 3,
  textTransform: "none",
  color: '#FFF',
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

export default function VereficationUserVerefication(props) {
  
  const verStatus = props.user;
  const verProgress = props.verUser;
  
  const verStatusLabel = 
  verProgress.verStatus == 0 ? 'No verification' :
  verProgress.verStatus == 1 ? 'Verified' :
  verProgress.verStatus == 2 ? 'In Progress' : 'No verification';
  
  const labelColor = 
  verProgress.verStatus == 0 ? 'red' :
  verProgress.verStatus == 1 ? 'green' :
  verProgress.verStatus == 2 ? 'orange' : 'red';
  
  const verProgressResponse = getUserVereficationProgress(verProgress);
  
  return (
    <div className="userVerefication topline mt-25">
      <div className="userVerefication-header">
        <h4>Verification</h4>
        <span className={labelColor}>{verStatusLabel}</span>
      </div>
      
      <span className="devider"></span>
      
      <div className="userVerefication-table">
        {verProgressResponse.map((item, index) => {
          const itemColor = item.status == 0 ? 'userVerefication-status red':
          item.status == 1 ? 'userVerefication-status green':
          item.status == 2 ? 'userVerefication-status orange': 'userVerefication-status';
          
          return(
            <div key={index} className='userVerefication-item'>
              <div className={itemColor}></div>
              <span>{item.message}</span>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}


function getUserVereficationProgress(verProgress) {
  const response = [];
  
  const videoSend = 
  verProgress.videoSend == 1 ? 'Video for verification sent to the system':
  verProgress.videoSend == 0 ? 'Video for verification was not sent to the system': 'Video for verification was not sent to the system';
  response.push({
    status: verProgress.videoSend,
    message: videoSend
  });
  
  if(verProgress.videoSend == 0) {
    return response;
  }
  
  const videoStatus = 
  verProgress.videoStatus == 1 ? 'Verification video viewed':
  verProgress.videoStatus == 0 ? 'Verification video not  viewed': 
  'Verification video not  viewed'
  response.push({
    status: verProgress.videoStatus,
    message: videoStatus
  });
  
  if(verProgress.videoStatus == 0) {
    return response;
  }
  
  const videoViewStatus = 
  verProgress.videoViewStatus == 1 ? 'Request approved':
  verProgress.videoViewStatus == 2 ? 'Verification confirmation pending':
  verProgress.videoViewStatus == 0 ? 'Request denied': 
  'Request denied'
  response.push({
    status: verProgress.videoViewStatus,
    message: videoViewStatus
  });
  
  if(verProgress.videoViewStatus == 0) {
    return response;
  }
  
  return response;
  
}