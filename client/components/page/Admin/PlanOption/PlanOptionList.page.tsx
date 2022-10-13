import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { PlanOptionListNextPageProps } from 'pages/admin/planOption/';
import PlanOptionList from './PlanOptionList';

const PlanOptionListPage = (props: PlanOptionListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="PlanOption List">
          <PlanOptionList {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default PlanOptionListPage;
