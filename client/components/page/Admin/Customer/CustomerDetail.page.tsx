import BannerCover from '@/components/layout/BannerCover';
// import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { CustomerDetailNextPageProps } from 'pages/admin/customer/[customerId]';
import CustomerDetail from './CustomerDetail';

const CustomerDetailPage = (props: CustomerDetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Customer Detail">
          <CustomerDetail {...props} />
        </BannerCover>
      </SidebarWithHeader>
      {/* <Footer /> */}
    </>
  );
};

export default CustomerDetailPage;
