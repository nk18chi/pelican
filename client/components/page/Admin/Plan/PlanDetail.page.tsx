import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/footertmp';
import { SidebarWithHeader } from '@/components/shared/Header';
import { PlanDetailNextPageProps } from 'pages/admin/plan/[planId]';
import PlanDetail from './PlanDetail';

const PlanDetailPage = (props: PlanDetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Plan Detail">
          <PlanDetail {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default PlanDetailPage;
