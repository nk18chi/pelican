import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { CustomerDetailNextPageProps } from 'pages/admin/customer/[customerId]';
import CustomerDetail from './CustomerDetail';

const CustomerDetailPage = (props: CustomerDetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <CustomerDetail {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default CustomerDetailPage;
