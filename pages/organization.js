import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../components/Buttons/Buttons";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { CreateOrganizationForm } from "../components/Organizations/CreateOrganizationForm";
import { GET_SITES_GQL } from "../graphql/gql/queries/sites-queries.gql";
import { MainLayout } from "../components/Layouts/MainLayout.js";
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
      <OrganizationsGridFilter data={organizations}></OrganizationsGridFilter>
      <OrganizationsGrid data={organizations}></OrganizationsGrid>
      <ModalComponent handleClose={handleClose} open={open}>
        <CreateOrganizationForm handleClose={handleClose} />
      </ModalComponent>
    </MainLayout>
  );
}

const organizations = [
  {
    id: 1,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 2,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 3,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 4,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 5,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 6,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 7,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 8,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 9,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
  {
    id: 10,
    name: "OCAPIA",
    address: "132Upland Dr, Houston, T 722...",
    email: "icapia@gmail.com",
    phone: "+1922-233-23-23",
    actions: "",
  },
];

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:4200/users`);
//   const users = await res.json();

//   return {
//     props: {
//       users: users,
//     },
//   };
// }
