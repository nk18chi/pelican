import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { CustomerListNextPageProps } from 'pages/admin/customer';
import CustomerList from './CustomerList';

const CustomerListPage = (props: CustomerListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <CustomerList {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default CustomerListPage;
