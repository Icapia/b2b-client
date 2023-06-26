import {
  ButtonDefault,
} from "../components/Buttons";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CreateOrganizationForm } from "../components/Organizations/CreateOrganization";
import { GET_ORGANIZATIONS_GQL } from "../graphql/gql/queries/organizations-queries.gql";
import { MainLayout } from "../components/Layouts/MainLayout";
import { ModalComponent } from "../components/Modal/Modal";
import { OrganizationsGrid } from "../components/Organizations/OrganizationsGrid";
import { OrganizationsGridFilter } from "../components/Organizations/OrganizationsFilter";
import { useAtom } from "jotai";
import { organizationCreateAtom } from "../store/organization";

const pageData = {
  pageTitle: "Organization",
};

export default function Organizations() {
  const [isOpen, setIsOpen] = useAtom(organizationCreateAtom)

  const handlerOpen = () => {
    setIsOpen(true);
  };

  const handlerClose = () => {
    setIsOpen(false);
  };

  const organizations = useQuery(GET_ORGANIZATIONS_GQL, {
    variables: {
      filter: {},
      sorting: [],
    },
  });

  return (
    <MainLayout
      name={pageData.pageTitle}
      headerChild={
        <ButtonDefault onClick={handlerOpen}>
          Create Organization
        </ButtonDefault>
      }
    >
      {organizations.data && (
        <>
          <OrganizationsGrid
            data={organizations.data.organizations}
          />
          <ModalComponent onRequestClose={handlerClose} isOpen={isOpen}>
            <CreateOrganizationForm />
          </ModalComponent>
        </>
      )}
    </MainLayout>
  );
}