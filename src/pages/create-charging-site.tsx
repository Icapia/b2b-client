import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Divider } from "@mui/material";
import { useMutation } from "@apollo/client";
import { siteAtom } from "@/store/edit-site";
import { Loader } from "@/components/Loader";
import { asyncGetOrganization } from "@/store/organization";
import { ChargePointT } from "@/types/site-types";
import { CREATE_AND_UPDATE_SITE_GQL } from "@/graphql/gql/mutations/site-mutations.gql";
import { useRouter } from "next/router";
import { MainLayout } from "@/layouts/MainLayout";
import { ButtonBlack, ButtonClose, ButtonDefault } from "@/components/Buttons";
import { ChargingSiteEditForm } from "@/components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm";
import { ChargePoint } from "@/components/ChargePoint";

export default function CreateChargingSite() {
  const [organizations] = useAtom(asyncGetOrganization)
  const [form, setForm] = useAtom(siteAtom)
  const [mounted, setMounted] = useState(false);
  const [request, result] = useMutation(CREATE_AND_UPDATE_SITE_GQL)
  const router = useRouter()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const handlerAddChargePoint = () => {
    const chargepoint: ChargePointT = {
      id: null,
      siteId: null,
      chargePointHardwareId: '',
      connectors: [
        { 
          id: null,
          connectorTypeName: "Type 1",
          chargePointId: null,
          siteId: null,
          label: "",
          chargePointHardwareId: '',
          connectorId: 1,
          power: 0,
          price: form?.default_price,
        }
      ]
    }

    const chargepoints = form?.chargePoints || [];
    chargepoints?.push(chargepoint)

    setForm({
      ...form,
      chargePoints: chargepoints
    })
  }

  const handlerSave = () => {
    try {
      request({
        onCompleted: () => {
          router.push('/charging-sites')
        },
        onError: (error: Error) => {
          console.log('Error', error)
        },
        variables: {
          input: {
            data: {
              organizationId: form?.organizationId,
              address: form?.address,
              id: form?.id,
              name: form?.name,
              zip_code: form?.zip_code,
              phone_number: form?.phone_number,
              default_price: form?.default_price,
              chargepoints: form?.chargePoints,
            }
          }
        }
      })
    } catch (error: any) {
      console.log(error?.message)
    }
  }

  const handlerDiscard = () => {
    router.back()
  }

  return mounted && (
    <>
      <MainLayout 
        name={'Create new Site'}
        headerChild={
          <div className="row">
            <ButtonClose onClick={handlerDiscard}>Discard</ButtonClose>
            <ButtonDefault onClick={handlerSave}>Save and create</ButtonDefault>
          </div>
        }
      >
        {(organizations.state == 'loading' || organizations.state == 'hasError') && (
          <Loader/>
        )}
        {organizations.state == 'hasData' && (
          <ChargingSiteEditForm organizations={organizations.data}/>
        )}
        <Divider
          orientation="horizontal"
        />
        <div className="connectorsList">
          {form?.chargePoints?.map((chargepoint, index) => {
            return (
              <ChargePoint
                key={index}
                index={index}
                chargepointId={index}
                chargepoint={chargepoint}
              />
            )
          })}
        </div>

        <ButtonBlack
          fullWidth
          onClick={handlerAddChargePoint}
        >
          {`+ Add new Charge Point`}
        </ButtonBlack>
      </MainLayout>
    </>
  );
}