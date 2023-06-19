import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../components/Buttons/Buttons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { CREATE_SITE_GQL } from "../graphql/gql/mutations/site-mutations.gql";
import ChargingSitesGrid from "../components/ChargingSites/ChargingSitesGrid";
import { CreateOrganizationForm } from "../components/Organizations/CreateOrganization";
import { CreateSiteForm } from "../components/ChargingSites/CreateSiteForm";
import { GET_SITES_GQL } from "../graphql/gql/queries/sites-queries.gql";
import { MainLayout } from "../components/Layouts/MainLayout";
import { ModalComponent } from "../components/Modal/Modal";
import { useRouter } from "next/router";

const pageData = {
  pageTitle: "Charging sites",
};

export const ChargingSites = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

  if (sites.data) console.log(sites.data.sites);

  const [mutationCreateSite, createSite] = useMutation(CREATE_SITE_GQL);

  const handleCreateSite = async () => {
    await mutationCreateSite({
      onCompleted: (data) => {
        router.push(`/charging-sites/${data.createOneSite.id}`);
      },
      variables: {
        input: {
          site: {
            name: "",
            site: "",
            site_area: "",
            address: "",
            zip_code: 0,
            phone_number: "",
            default_price: 0.0,
            dynamic_asset: "",
            asset_type: "",
            information: "",
            instant_power: 0,
            battery: "",
            location: {
              type: "Point",
              coordinates: [0, 0],
            },
          },
        },
      },
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainLayout
      name={pageData.pageTitle}
      headerChild={
        <ButtonDefault onClick={handleCreateSite}>
          Create Charging site
        </ButtonDefault>
      }
    >
      {sites.data && (
        <ChargingSitesGrid data={sites.data.sites}></ChargingSitesGrid>
      )}
    </MainLayout>
  );
}

