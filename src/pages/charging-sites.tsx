import {
  ButtonDefault,
} from "../components/Buttons";

import { MainLayout } from "../layouts/MainLayout";
import { useAtom } from "jotai";
import { getSitesAsyncAtom, getSitesAtom } from "../store/sites";
import { SitesGrid } from "../components/ChargingSites/SiteGrid";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/router";

const pageData = {
  pageTitle: "Charging sites",
};

export default function ChargingSites () {
  const [sites] = useAtom(getSitesAsyncAtom)
  const router = useRouter()

  const handlerNavigate = () => {
    router.push('/create-charging-site')
  }

  return (
    <MainLayout
      name={pageData.pageTitle}
      headerChild={
        <ButtonDefault
          onClick={handlerNavigate}
        >
          Create Charging site
        </ButtonDefault>
      }
    >
      {(sites.state == 'loading' || sites.state == 'hasError') && (
        <Loader/>
      )}
      {sites.state == 'hasData' && (
        <SitesGrid sites={sites.data}/>
      )}
    </MainLayout>
  );
}