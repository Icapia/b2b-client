import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../components/Buttons";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { CREATE_SITE_GQL } from "../graphql/gql/mutations/site-mutations.gql";
import { GET_SITES_GQL } from "../graphql/gql/queries/sites-queries.gql";
import { MainLayout } from "../components/Layouts/MainLayout";
import { useRouter } from "next/router";
import { CreateOneSiteResponse, Site } from "../types/entities";
import { useAtom } from "jotai";
import { getSitesAtom } from "../store/sites";
import { SitesGrid } from "../components/ChargingSites/SiteGrid";

const pageData = {
  pageTitle: "Charging sites",
};

export default function ChargingSites () {
  const [, setOpen] = useState(false);
  const router = useRouter();
  const [sites] = useAtom(getSitesAtom)

  const [mutationCreateSite, createSite] = useMutation(CREATE_SITE_GQL);

  const handleCreateSite = async () => {
    await mutationCreateSite({
      onCompleted: (data: CreateOneSiteResponse) => {
        const id = data?.createOneSite?.id || null;

        if(id) {
          router.push(`/charging-sites/${id}`);
        }
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

  console.log('sites', sites.length)

  return (
    <MainLayout
      name={pageData.pageTitle}
      headerChild={
        <ButtonDefault onClick={handleCreateSite}>
          Create Charging site
        </ButtonDefault>
      }
    >
      {sites?.length > 0 && (
        <SitesGrid sites={sites}></SitesGrid>
      )}
    </MainLayout>
  );
}