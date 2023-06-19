import {
  ButtonDefault,
} from "../components/Buttons/Buttons";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CreateOrganizationForm } from "../components/Organizations/CreateOrganization";
import { GET_ORGANIZATIONS_GQL } from "../graphql/gql/queries/organizations-queries.gql";
import { MainLayout } from "../components/Layouts/MainLayout";
import { ModalComponent } from "../components/Modal/Modal";
import { OrganizationsGrid } from "../components/Organizations/OrganizationsGrid";
import { OrganizationsGridFilter } from "../components/Organizations/OrganizationsFilter";

const pageData = {
  pageTitle: "Organization",
};

export default function Organizations() {
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const organizations = useQuery(GET_ORGANIZATIONS_GQL, {
    variables: {
      filter: {},
      sorting: [],
    },
  });

  if (organizations.data) console.log(organizations.data);

  return (
    <MainLayout
      name={pageData.pageTitle}
      headerChild={
        <ButtonDefault onClick={handleClickOpen}>
          Create Organization
        </ButtonDefault>
      }
    >
      {organizations.data && (
        <>
          <OrganizationsGridFilter
            length={organizations?.data?.length}
          ></OrganizationsGridFilter>
          <OrganizationsGrid
            data={organizations.data.organizations}
          ></OrganizationsGrid>
          <ModalComponent onRequestClose={handleClose} isOpen={isOpen}>
            <CreateOrganizationForm />
          </ModalComponent>
        </>
      )}
    </MainLayout>
  );
}