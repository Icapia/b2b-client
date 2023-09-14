import { GET_ORGANIZATIONS_GQL } from "@/graphql/gql/queries/organizations-queries.gql"
import { useMutation } from "@apollo/client"
import {
  Box,
  FormGroup,
  Grid,
  Stack
} from "@mui/material"
import { useAtom } from "jotai"
import { ChangeEvent, FC, useState } from "react"
import { UPDATE_ORGANIZATION_GQL } from "../../graphql/gql/mutations/organization-mutations.gql"
import { organizationEditAtom, updateOrganizationRequest } from "../../store/organization"
import { snackbarState } from "../../store/snackbar"
import { OrganizationCreateForm } from "../../types/organization-types"
import { ButtonClose, ButtonDefault } from "../Buttons"
import { Input } from '../UI/Input/Input'

interface EditOrganizationI {
  id: number,
  edit: any,
}

export const EditOrganization: FC<EditOrganizationI> = ({
  id,
  edit
}) => {
  const [, setIsOpen] = useAtom(organizationEditAtom)
  const [update, setUpdate] = useAtom(updateOrganizationRequest)
  const [form, setForm] = useState<OrganizationCreateForm>({
    address: edit?.row?.address,
    email: edit?.row?.email,
    name: edit?.row?.name,
    zip_code: edit?.row?.zip_code,
    phone_number: edit?.row?.phone_number,
  });
  const [, setSnackbar] = useAtom(snackbarState)

  const [mutationUpdateOrganization, updateOrganization] = useMutation(
    UPDATE_ORGANIZATION_GQL
  );

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    setForm({...form, [name]: event.target.value})
  }

  const handlerClose = () => {
    setIsOpen(false)
  }

  const handlerCreate = async () => {
    const res = await mutationUpdateOrganization({
      onCompleted: async () => {
        setUpdate(!update);
        setSnackbar({
          open: true,
          message: 'Organization Updated',
          type: "success",
        })
        handlerClose();
      },
      variables: {
        input: {
          id: id,
          update: {
            name: form.name,
            email: form.email,
            phone_number: form.phone_number,
            address: form.address,
            zip_code: parseInt(form.zip_code),
          },
        },
      },
      refetchQueries: () => [{
        query: GET_ORGANIZATIONS_GQL,
        variables: {
          filter: {},
          sorting: [],
        },
      }]
    });
  }

  return (
    <Box>
      <h2>Update organization</h2>
      <h5>Notification:</h5>
      <p>
        After updating the organization, the changes will take effect in a couple of minutes
      </p>
      <div className="modal__content-form modal__content-form--fullw mxw-700">
        <FormGroup className="modal__content-formGroup col-2 mt-20">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Input
                value={form.name}
                type={'string'}
                name={'name'}
                label={'Organization Name'}
                placeholder={'Enter name'}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                value={form.zip_code}
                type={'number'}
                name={'zip_code'}
                validation='zip'
                label={'ZIP Code'}
                placeholder={'Enter zip code'}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                value={form.address}
                type={'string'}
                name={'address'}
                label={'Organization Address'}
                placeholder={'Enter address'}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={6}>
             <Input
                value={form.phone_number}
                type={'string'}
                validation='phone'
                name={'phone_number'}
                label={'Phone Number'}
                placeholder={'Enter phone'}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                value={form.email}
                type={'email'}
                validation='email'
                name={'email'}
                label={'E-mail'}
                placeholder={'Enter email'}
                onChange={handlerChange}
              />
            </Grid>
          </Grid>
        </FormGroup>
      </div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <ButtonClose
          disabled={false}
          className={"mt-20 flex-fw"}
          fullWidth={false}
          onClick={handlerClose}
        >
          Cancel
        </ButtonClose>

        <ButtonDefault
          disabled={false}
          className={"mt-20 flex-fw"}
          fullWidth={false}
          onClick={handlerCreate}
        >
          {(updateOrganization?.loading && "Loading...") || "Update"}
        </ButtonDefault>
      </Stack>
    </Box>
  );
};
