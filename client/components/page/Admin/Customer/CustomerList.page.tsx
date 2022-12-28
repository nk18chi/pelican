import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/footertmp';
import { SidebarWithHeader } from '@/components/shared/Header';
import { CustomerListNextPageProps } from 'pages/admin/customer';
import CustomerList from './CustomerList';

const CustomerListPage = (props: CustomerListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Customer List">
          <CustomerList {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default CustomerListPage;
