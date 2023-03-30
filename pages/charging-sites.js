import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../components/Buttons/Buttons";
import { useEffect, useState } from "react";

import ChargingSitesGrid from "../components/ChargingSites/ChargingSitesGrid";
import ChargingSitesGridFilter from "../components/ChargingSites/ChargingSitesGridFilter";
import { CreateChargingSitesForm } from "../components/ChargingSites/CreateChargingSitesForm";
import { CreateOrganizationForm } from "../components/Organizations/CreateOrganizationForm";
import { MainLayout } from "../components/layouts/MainLayout.js";
import { ModalComponent } from "../components/Modal/Modal";

// import { ButtonDefault } from "../components/Buttons/Buttons";

const pageData = {
  pageTitle: "Charging sites",
};

export default function Home({ users }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainLayout
      name={pageData.pageTitle}
      childComponent={
        <ButtonDefault onClick={handleClickOpen}>
          Create Charging site
        </ButtonDefault>
      }
    >
      <ChargingSitesGridFilter users={users}></ChargingSitesGridFilter>
      <ChargingSitesGrid users={users}></ChargingSitesGrid>
      <ModalComponent handleClose={handleClose} open={open}>
        <CreateOrganizationForm handleClose={handleClose} />
      </ModalComponent>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4200/users`);
  const users = await res.json();

  return {
    props: {
      users: users,
    },
  };
}
