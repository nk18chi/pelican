import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { PlanOptionDetailNextPageProps } from 'pages/admin/planOption/[planOptionId]';
import PlanOptionDetail from './PlanOptionDetail';

const PlanOptionDetailPage = (props: PlanOptionDetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="PlanOption Detail">
          <PlanOptionDetail {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default PlanOptionDetailPage;
