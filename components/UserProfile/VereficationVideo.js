import ReactPlayer from 'react-player'

export default function VereficationVideo(props) {
  
  const videoUrl = props.videoUrl;
  const videoDate = props.videoDate;
  
  const videoStyle = {
    color: 'blue',
  };
  
  return (
    <div className="userVereficationVideo topline mb-25">
      <div className="userVereficationVideo-header">
        <h4>Verification Video</h4>
        <span>{"Sent: " + videoDate}</span>
      </div>
      <span className="devider"></span>
      <ReactPlayer 
      className={"video"}
      url={videoUrl} 
      loop={false}
      controls={true}
      volume={0.5}
      width="100%"
      height={500}
      // style={}
      />
    </div>
  )
}