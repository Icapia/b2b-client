import { useState } from 'react';
import GlobalSettingsModal from './Modal/GlobalSettingsModal';
import GlobalSettingsModalSelect from './Modal/GlobalSettingsModalSelect';

export default function GlobalSettings(props) {
  const settings = props.settings;
  
  const [globalSettings, setSettings] = useState({
    email: settings.email,
    phone: settings.phone,
    lang: settings.lang
  });
  
  const udpdateSettings = (data) => {
    setSettings({
      email: data.email,
      phone: data.phone,
      lang: data.lang,
    })
  }
  
 
  return (
    <div className="globalSettings">
      <div className="globalSettings__item topline">
        <div className="globalSettings__item-header">
          <h5>Notification Email</h5>
          <GlobalSettingsModal
          settings={globalSettings}
          keyValue="email"
          title={"Notification Email Editing"}
          label={"Email"}
          helperText={"After changing the E-mail, confirmation from the current E-mail address is required. Make sure you have access to it"}
          onEdit={udpdateSettings}>
          </GlobalSettingsModal>
        </div>
        <span>{globalSettings.email}</span>
      </div>
      <div className="globalSettings__item topline">
        <div className="globalSettings__item-header">
          <h5>Notification Phone</h5>
          <GlobalSettingsModal
          settings={globalSettings}
          keyValue="phone"
          title={"Notification Phone Editing"}
          label={"Phone Number"}
          helperText={"After changing the E-mail, confirmation from the current E-mail address is required. Make sure you have access to it"}
          onEdit={udpdateSettings}>
          </GlobalSettingsModal>
        </div>
        <span>{globalSettings.phone}</span>
      </div>
      <div className="globalSettings__item topline">
        <div className="globalSettings__item-header">
          <h5>Main Language</h5>
          <GlobalSettingsModalSelect
          settings={globalSettings}
          keyValue="lang"
          title={"Main Language"}
          label={"Language"}
          helperText={""}
          onEdit={udpdateSettings}>
          </GlobalSettingsModalSelect>
        </div>
        <span>{globalSettings.lang}</span>
      </div>
    </div>
  )
}






