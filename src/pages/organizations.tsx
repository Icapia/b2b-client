import {
  ButtonDefault,
} from "../components/Buttons";
import { MainLayout } from "../layouts/MainLayout";
import { useAtom } from "jotai";
import { asyncGetOrganization, getOrganizations, organizationCreateAtom } from "../store/organization";
import { OrganizationsGrid } from "@/components/Organizations/OrganizationsGrid";
import { ModalComponent } from "@/components/Modal/Modal";
import { CreateOrganizationForm } from "@/components/Organizations/CreateOrganization";
import { Loader } from "@/components/Loader";

export default function Organizations() {
  const [isOpen, setIsOpen] = useAtom(organizationCreateAtom)
  const [organizations] = useAtom(asyncGetOrganization)

  const handlerOpen = () => {
    setIsOpen(true);
  };

  const handlerClose = () => {
    setIsOpen(false);
  };

  return (
    <MainLayout
      name={'Organization'}
      headerChild={
        <ButtonDefault onClick={handlerOpen}>
          Create Organization
        </ButtonDefault>
      }
    >
      <>
        {(organizations.state == 'loading' || organizations.state == 'hasError') && (
          <Loader/>
        )}
        {organizations.state == 'hasData' && (
          <OrganizationsGrid data={organizations.data}/>
        )}
        <ModalComponent onRequestClose={handlerClose} isOpen={isOpen}>
          <CreateOrganizationForm />
        </ModalComponent>
      </>
    </MainLayout>
  );
}