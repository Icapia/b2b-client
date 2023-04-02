import CrmRolesSettings from "../components/Settings/CrmRolesSettings.js";
import GeneralSettings from "../components/Settings/GeneralSettings.js";
import GlobalSettings from "../components/Settings/GlobalSettings.js";
import { MainLayout } from "../components/Layouts/MainLayout";
import SubscribesSettings from "../components/Settings/SubscribesSettings.js";
import { useHttp } from "../hooks/http.hook";
import { useState } from "react";

const pageData = {
  pageTitle: "Global Settings",
};

export default function Home({ settingsJson, subscribesJson, usersJson }) {
  const { request, loading, error, clearError } = useHttp();

  const [settings, setSettings] = useState({
    email: settingsJson.global.email,
    phone: settingsJson.global.phone,
    lang: settingsJson.global.lang,
    supportMail: settingsJson.general.supportMail,
    supportPhones: settingsJson.general.supportPhones,
    workTimeStart: settingsJson.general.workTime.start,
    workTimeEnd: settingsJson.general.workTime.end,
  });

  const udpdateSettings = (data) => {
    setSettings({
      email: data.email,
      phone: data.phone,
      lang: data.lang,
      supportMail: data.supportMail,
      supportPhones: data.supportPhones,
      workTimeStart: data.workTimeStart,
      workTimeEnd: data.workTimeEnd,
    });
  };

  const addSubscribe = async (data) => {
    try {
      await request("http://localhost:4200/subscribes", "POST", data.form);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const deleteSubscribe = async (data) => {
    try {
      const response = await request(
        `http://localhost:4200/subscribes/${data.form.id}`,
        "DELETE"
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const editSubscribe = async (data) => {
    try {
      await request(
        `http://localhost:4200/subscribes/${data.form.id}`,
        "PUT",
        data.form
      );
    } catch (e) {
      console.log("Error", e);
    }
  };

  const addRole = async (data) => {
    try {
      await request("http://localhost:4200/crmUsersRoles", "POST", data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <MainLayout name={pageData.pageTitle}>
      <div className="box">
        <div className="box-left">
          <GeneralSettings
            settings={settings}
            onEdit={udpdateSettings}
          ></GeneralSettings>
        </div>
        <div className="box-right">
          <GlobalSettings settings={settings}></GlobalSettings>
          <SubscribesSettings
            onDelete={deleteSubscribe}
            onEdit={editSubscribe}
            onChange={addSubscribe}
            subscribe={subscribesJson}
          ></SubscribesSettings>
          <CrmRolesSettings
            onAdd={(form) => addRole(form)}
            users={usersJson}
          ></CrmRolesSettings>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
  const [settingsRes, subscribeRes, usersRes] = await Promise.all([
    fetch(`http://localhost:4200/settings`),
    fetch(`http://localhost:4200/subscribes`),
    fetch(`http://localhost:4200/crmUsersRoles`),
  ]);

  const settingsJson = await settingsRes.json();
  const subscribesJson = await subscribeRes.json();
  const usersJson = await usersRes.json();
  return {
    props: {
      settingsJson: settingsJson,
      subscribesJson: subscribesJson,
      usersJson: usersJson,
    },
  };
}
