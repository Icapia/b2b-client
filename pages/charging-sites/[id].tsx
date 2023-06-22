import { useMutation, useQuery } from "@apollo/client";
import { ButtonBlack } from "../../components/Buttons";
import { CREATE_CHARGE_POINT_GQL } from "../../graphql/gql/mutations/charge-point-mutations.gql";
import { CREATE_CONNECTOR_GQL } from "../../graphql/gql/mutations/connector-mutations.gql";
import { ChargingSiteEditForm } from "../../components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm";
import { GET_ORGANIZATIONS_GQL } from "../../graphql/gql/queries/organizations-queries.gql";
import { GET_SITE_GQL } from "../../graphql/gql/queries/sites-queries.gql";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { UPDATE_SITE_GQL } from "../../graphql/gql/mutations/site-mutations.gql";
import { useRouter } from "next/router";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ChargePointEdit from "../../components/ChargingSites/ChargingSiteEdit/ChargePoint/ChargePointEditWrap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function ChargingSite() {
  const router = useRouter();
  const { id } = router.query;

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

  const handleUpdateSite = async (id: string, form: any) => {
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

  const handleCreateChargePoint = async (id: string) => {
    await mutationCreateChargePoint({
      refetchQueries: [
        {
          query: GET_SITE_GQL,
          variables: getSiteVariables,
        },
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

  const handleCreateConnector = async (id: string) => {
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
            chargePointId: parseInt(id),
          },
        },
      },
    });
  };

  const handleUpdateConnector = (id: string) => {
    console.log("handleAddConnector", id);
  };

  return (
    <>
      {site?.data && (
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
            {/* <div className={"mt-40"}>
              {site?.data?.site?.chargePoints?.map((e, i) => {
                return (
                  <Accordion key={i}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography fontWeight={600}>Charge Point #{e.id}</Typography>
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
            </div> */}
          </div>
          <ButtonBlack
            // onClick={handleCreateChargePoint}
            className={"mt-20"}
            fullWidth
          >
            {(createChargePoint.loading && `Loading...`) ||
              `+ Add new Charge Point`}
          </ButtonBlack>
        </MainLayout>
      )}
    </>
  );
}