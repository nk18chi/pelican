import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/footertmp';
import { SidebarWithHeader } from '@/components/shared/Header';
import { PlanListNextPageProps } from 'pages/admin/plan/';
import PlanList from './PlanList';

const PlanListPage = (props: PlanListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Plan List">
          <PlanList {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default PlanListPage;
