import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../components/Buttons/Buttons";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { CreateOrganizationForm } from "../components/Organizations/CreateOrganizationForm";
import { GET_SITES_GQL } from "../graphql/gql/queries/sites-queries.gql";
import { MainLayout } from "../components/layouts/MainLayout.js";
import { ModalComponent } from "../components/Modal/Modal";
import OrganizationsGrid from "../components/Organizations/OrganizationsGrid";
import OrganizationsGridFilter from "../components/Organizations/OrganizationsGridFilter";

// import { ButtonDefault } from "../components/Buttons/Buttons";

const pageData = {
  pageTitle: "Organization",
};

export default function Home({ users }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sites = useQuery(GET_SITES_GQL, {
    variables: {
      filter: {},
      sorting: [],
      chargePointFilter: {},
      chargePointSorting: [],
      connectorFilter: {},
      connectorSorting: [],
    },
  });

  if (sites.data) console.log(sites.data);

  return (
    <MainLayout
      name={pageData.pageTitle}
      childComponent={
        <ButtonDefault onClick={handleClickOpen}>
          Create Organization
        </ButtonDefault>
      }
    >
      <OrganizationsGridFilter users={users}></OrganizationsGridFilter>
      <OrganizationsGrid users={users}></OrganizationsGrid>
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
