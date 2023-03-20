
export default function VereficationUserProfileInfo(props) {
  
  return (
    <div className="userProfile__profileInfo mt-25 topline">
      <h4>Profile Information</h4>
      <span className="devider"></span>
      
      <div className="userProfile__profileInfo-table">
        <div className="userProfile__profileInfo-item">
          <span>Username</span>
          <span className="userProfile__profileInfo-value">{props.user.firstname + ' ' + props.user.lastname}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Email</span>
          <span className="userProfile__profileInfo-value">{props.user.email}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Phone</span>
          <span className="userProfile__profileInfo-value">{props.user.phone}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Gender</span>
          <span className="userProfile__profileInfo-value">{props.user.gender}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Date of birth</span>
          <span className="userProfile__profileInfo-value">{props.user.birthday}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Registration Date</span>
          <span className="userProfile__profileInfo-value">{props.user.registrationDate}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Country</span>
          <span className="userProfile__profileInfo-value">{props.user.country}</span>
        </div>
      </div>
    </div>
  )
}



