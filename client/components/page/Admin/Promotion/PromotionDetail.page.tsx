import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/footertmp';
import { SidebarWithHeader } from '@/components/shared/Header';
import { PromotionDetailNextPageProps } from 'pages/admin/promotion/[promotionId]';
import PromotionDetail from './PromotionDetail';

const PromotionDetailPage = (props: PromotionDetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Promotion Detail">
          <PromotionDetail {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default PromotionDetailPage;
