import { gql, useMutation, useQuery } from "@apollo/client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ButtonClose } from "../../components/Buttons/Buttons";
import { CREATE_CHARGE_POINT_GQL } from "../../graphql/gql/mutations/charge-point-mutations.gql";
import { CREATE_CONNECTOR_GQL } from "../../graphql/gql/mutations/connector-mutations.gql";
import ChargePointEdit from "../../components/ChargingSites/ChargingSiteEdit/ChargePoint/ChargePointEditWrap";
import { ChargingSiteEditForm } from "../../components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GET_ORGANIZATIONS_GQL } from "../../graphql/gql/queries/organizations-queries.gql";
import { GET_SITE_GQL } from "../../graphql/gql/queries/sites-queries.gql";
import { MainLayout } from "../../components/Layouts/MainLayout";
import Typography from "@mui/material/Typography";
import { UPDATE_SITE_GQL } from "../../graphql/gql/mutations/site-mutations.gql";
import { parse } from "graphql";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ChargingSite() {
  const router = useRouter();
  const { id } = router.query;

  if (id == 0) {
  }

  const getSiteVariables = {
    id: id,
    chargePointFilter: {},
    chargePointSorting: [],
    connectorFilter: {},
    connectorSorting: [],
  };

  const site = useQuery(GET_SITE_GQL, {
    variables: getSiteVariables,
  });

  const organizations = useQuery(GET_ORGANIZATIONS_GQL, {
    variables: getSiteVariables,
  });

  const [mutationCreateChargePoint, createChargePoint] = useMutation(
    CREATE_CHARGE_POINT_GQL
  );

  const [mutationCreateConnector, createConnector] =
    useMutation(CREATE_CONNECTOR_GQL);

  const [mutationUpdateSite, updateSite] = useMutation(UPDATE_SITE_GQL);

  const handleUpdateSite = async (id, form) => {
    await mutationUpdateSite({
      refetchQueries: [
        {
          query: GET_SITE_GQL,
          variables: getSiteVariables,
        }, // DocumentNode object parsed with gql
        "GetSite", // Query name
      ],
      variables: {
        input: {
          id: parseInt(id),
          update: {
            organizationId: parseInt(form.organizationId),
            name: form.name,
            zip_code: parseInt(form.zip_code),
            address: form.address,
            phone_number: form.phone_number,
            default_price: parseFloat(form.default_price),
          },
        },
      },
    });
  };

  const handleCreateChargePoint = async (siteId) => {
    await mutationCreateChargePoint({
      refetchQueries: [
        {
          query: GET_SITE_GQL,
          variables: getSiteVariables,
        }, // DocumentNode object parsed with gql
        "GetSite", // Query name
      ],
      variables: {
        input: {
          chargePoint: {
            siteId: parseInt(site.data.site.id),
          },
        },
      },
    });
  };

  const handleCreateConnector = async (chargePointId) => {
    await mutationCreateConnector({
      refetchQueries: [
        {
          query: GET_SITE_GQL,
          variables: getSiteVariables,
        }, // DocumentNode object parsed with gql
        "GetSite", // Query name
      ],
      variables: {
        input: {
          connector: {
            siteId: parseInt(site.data.site.id),
            chargePointId: parseInt(chargePointId),
          },
        },
      },
    });
  };

  const handleUpdateConnector = (chargePointId) => {
    console.log("handleAddConnector", chargePointId);
  };

  if (site.data) console.log(site.data.site.chargePoints);

  return (
    <>
      {site.data && (
        <MainLayout name={`Site #${site.data.site.id}`}>
          <div>
            {organizations?.data && (
              <ChargingSiteEditForm
                organizations={organizations.data.organizations}
                data={site.data.site}
                handleUpdateSite={handleUpdateSite}
              ></ChargingSiteEditForm>
            )}
          </div>

          <div>
            <div className={"mt-40"}>
              {site.data.site.chargePoints.map((e, i) => {
                return (
                  <Accordion key={i}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Charge Point #{e.id}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ChargePointEdit
                        getSiteVariables={getSiteVariables}
                        handleAddConnector={handleCreateConnector}
                        handleUpdateConnector={handleUpdateConnector}
                        loading={createConnector.loading}
                        data={e}
                      ></ChargePointEdit>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
          <ButtonClose
            onClick={handleCreateChargePoint}
            className={"mt-20 "}
            fullWidth
          >
            {(createChargePoint.loading && `Loading...`) ||
              `+ Add new Charge Point`}
          </ButtonClose>
          {/* <ButtonClose
            onClick={() => handleCreateConnector()}
            className={"mt-20 "}
            fullWidth
          >
            + Add new Charge Point
          </ButtonClose> */}
        </MainLayout>
      )}
    </>
  );
}

// function getDateFormat(date) {
//   const nDate = new Date(date);
//   const nDateDay =
//     nDate.getDate() < 10 ? "0" + nDate.getDate() : nDate.getDate();
//   const nDateMonth =
//     nDate.getMonth() + 1 < 10
//       ? "0" + (nDate.getMonth() + 1)
//       : nDate.getMonth() + 1;
//   return nDate.getFullYear() + "-" + nDateMonth + "-" + nDateDay;
// }

// export async function getServerSideProps(ctx) {
//   const [res, verRes, imageRes, subscribesRes, globalSubscribesRes, logsRes] =
//     await Promise.all([
//       fetch(`http://localhost:4200/users/${ctx.query.id}`),
//       fetch(`http://localhost:4200/verification/${ctx.query.id}`),
//       fetch(`http://localhost:4200/usersImages/${ctx.query.id}`),
//       fetch(`http://localhost:4200/userSubscribes/${ctx.query.id}`),
//       fetch(`http://localhost:4200/subscribes/`),
//       fetch(`http://localhost:4200/usersLog/1`),
//     ]);

//   const user = await res.json();
//   const verUser = await verRes.json();
//   const userImages = await imageRes.json();
//   const userSubscribes = await subscribesRes.json();
//   const globalSubscribes = await globalSubscribesRes.json();
//   const userLogs = await logsRes.json();

//   return {
//     props: {
//       user: user,
//       verUser: verUser,
//       userImages: userImages,
//       userSubscribes: userSubscribes,
//       globalSubscribes: globalSubscribes,
//       userLogs: userLogs,
//     },
//   };
// }
