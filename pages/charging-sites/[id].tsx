import { ButtonBlack, ButtonClose, ButtonDefault } from "../../components/Buttons";
import { ChargingSiteEditForm } from "../../components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";
import { siteIdAtom, getSiteAtom, getSiteOrganizationAtom, editSiteAtom } from "../../store/site";
import { ChargePoint } from "../../components/ChargePoint";
import { ChargePointT } from "../../types/site-types";

export default function ChargingSite() {
  const router = useRouter();
  const { id } = router.query;
  const setSiteId = useSetAtom(siteIdAtom)

  const [form, setForm] = useAtom(editSiteAtom)

  useEffect(() => {
    setSiteId(id as string)
  }, [id])

  const [site] = useAtom(getSiteAtom)
  const [organizations] = useAtom(getSiteOrganizationAtom)

  useEffect(() => {
    setForm({...form, ...site})
  }, [site])

  const handlerAddChargePoint = () => {
    const lastChargePoint = form.chargepoints?.slice(-1).pop();
    const chargePointID = lastChargePoint ? parseInt(lastChargePoint.id) + 1 : 0;
    const chargepoint: ChargePointT = {
      id: chargePointID?.toString(),
      siteId: form.id,
      chargePointHardwareId: '',
      connectors: [
        { 
          label: "",
          chargePointHardwareId: '',
          connectorId: 1,
          connectorTypeName: "Type 1",
          power: 0,
          price: form?.default_price,
          chargePointId: 0,
          siteId: form?.id,
        }
      ]
    }

    const chargepointsArray = form?.chargepoints || [];
    chargepointsArray?.push(chargepoint)

    setForm({
      ...form,
      chargepoints: chargepointsArray
    })
  }

  return (
    <>
      <MainLayout 
        name={site?.id ? 'Site #' + site?.id : 'Site'}
        headerChild={
          <div className="row">
            <ButtonClose>Discard</ButtonClose>
            <ButtonDefault>Save and create</ButtonDefault>
          </div>
        }
      >
        <div>
          <ChargingSiteEditForm
            organizations={organizations}
          />
          {form?.chargepoints?.map((chargepoint, index) => {
            return (
              <ChargePoint
                chargepoint={chargepoint}
              />
            )
          })}
        </div>

        <ButtonBlack
          className={"mt-20"}
          fullWidth
          onClick={handlerAddChargePoint}
        >
          {`+ Add new Charge Point`}
        </ButtonBlack>
      </MainLayout>
    </>
  );
}