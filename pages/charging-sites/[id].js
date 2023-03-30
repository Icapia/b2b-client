import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ButtonClose } from "../../components/Buttons/Buttons";
import ChargePointEdit from "../../components/ChargingSites/ChargingSiteEdit/ChargePoint/ChargePointEditWrap";
import { ChargingSiteEditForm } from "../../components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MainLayout } from "../../components/layouts/MainLayout.js";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function UserProfile({
  user,
  verUser,
  userImages,
  userSubscribes,
  globalSubscribes,
  userLogs,
}) {
  const [userData, setUserData] = useState({
    id: user.id,
    gender: user.gender,
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    registrationDate: getDateFormat(user.registrationDate),
    birthday: getDateFormat(user.birthday),
    country: user.country,
  });

  const updateUserData = (userData) => {
    setUserData({
      id: userData.id,
      gender: userData.gender,
      firstname: userData.firstname,
      lastname: userData.lastname,
      phone: userData.phone,
      email: userData.email,
      registrationDate: userData.registrationDate,
      birthday: getDateFormat(userData.birthday),
      country: userData.country,
    });
  };

  return (
    <MainLayout name={userData.firstname + " " + userData.lastname}>
      <div>
        <ChargingSiteEditForm></ChargingSiteEditForm>
      </div>
      <div className="box">
        <div className={"mt-40"}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Charge Point #239239</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ChargePointEdit></ChargePointEdit>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Charge Point #239240</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography> */}
              <ChargePointEdit></ChargePointEdit>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <ButtonClose className={"mt-20 "} fullWidth>
        + Add new Charge Point
      </ButtonClose>
    </MainLayout>
  );
}

function getDateFormat(date) {
  const nDate = new Date(date);
  const nDateDay =
    nDate.getDate() < 10 ? "0" + nDate.getDate() : nDate.getDate();
  const nDateMonth =
    nDate.getMonth() + 1 < 10
      ? "0" + (nDate.getMonth() + 1)
      : nDate.getMonth() + 1;
  return nDate.getFullYear() + "-" + nDateMonth + "-" + nDateDay;
}

export async function getServerSideProps(ctx) {
  const [res, verRes, imageRes, subscribesRes, globalSubscribesRes, logsRes] =
    await Promise.all([
      fetch(`http://localhost:4200/users/${ctx.query.id}`),
      fetch(`http://localhost:4200/verification/${ctx.query.id}`),
      fetch(`http://localhost:4200/usersImages/${ctx.query.id}`),
      fetch(`http://localhost:4200/userSubscribes/${ctx.query.id}`),
      fetch(`http://localhost:4200/subscribes/`),
      fetch(`http://localhost:4200/usersLog/1`),
    ]);

  const user = await res.json();
  const verUser = await verRes.json();
  const userImages = await imageRes.json();
  const userSubscribes = await subscribesRes.json();
  const globalSubscribes = await globalSubscribesRes.json();
  const userLogs = await logsRes.json();

  return {
    props: {
      user: user,
      verUser: verUser,
      userImages: userImages,
      userSubscribes: userSubscribes,
      globalSubscribes: globalSubscribes,
      userLogs: userLogs,
    },
  };
}
