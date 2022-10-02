import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { CustomerListNextPageProps } from 'pages/admin/customers';
import CustomerList from './CustomerList';

const CustomerPage = (props: CustomerListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <CustomerList {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default CustomerPage;
