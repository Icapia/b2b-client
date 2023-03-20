import GeneralSettingsModal from "./Modal/GeneralSettingsModal";

export default function GeneralSettings(props) {
  
  const settings = props.settings;
 
  return (
    <div className="userProfile__profileInfo topline">
      <h4>General Settings</h4>
      <span className="devider"></span>
      
      <div className="userProfile__profileInfo-table">
        <div className="userProfile__profileInfo-item">
          <span>Support mail</span>
          <span className="userProfile__profileInfo-value">{settings.supportMail}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Support phones</span>
          <span className="userProfile__profileInfo-value">{settings.supportPhones}</span>
        </div>
        <div className="userProfile__profileInfo-item">
          <span>Work Time</span>
          <span className="userProfile__profileInfo-value">{settings.workTimeStart + '-' + settings.workTimeEnd}</span>
        </div>
      </div>
      
      <GeneralSettingsModal
      onEdit={(data) => props.onEdit({
        email: data.email,
        phone: data.phone,
        lang: data.lang,
        supportMail: data.supportMail,
        supportPhones: data.supportPhones,
        workTimeStart: data.workTimeStart,
        workTimeEnd: data.workTimeEnd
      })} 
      settings={settings}>
      </GeneralSettingsModal>
      
     
    </div>
  )
}






