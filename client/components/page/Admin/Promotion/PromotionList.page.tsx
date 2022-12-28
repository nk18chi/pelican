import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { PromotionListNextPageProps } from 'pages/admin/promotion/';
import PromotionList from './PromotionList';

const PromotionListPage = (props: PromotionListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Promotion List">
          <PromotionList {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default PromotionListPage;
