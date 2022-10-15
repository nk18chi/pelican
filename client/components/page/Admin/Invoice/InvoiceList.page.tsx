import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { InvoiceListNextPageProps } from 'pages/admin/invoice/';
import InvoiceList from './InvoiceList';

const InvoiceListPage = (props: InvoiceListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Invoice List">
          <InvoiceList {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default InvoiceListPage;
