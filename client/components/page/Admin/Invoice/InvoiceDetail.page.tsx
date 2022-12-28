import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/footertmp';
import { SidebarWithHeader } from '@/components/shared/Header';
import { InvoiceDetailNextPageProps } from 'pages/admin/invoice/[invoiceId]';
import InvoiceDetail from './InvoiceDetail';

const InvoiceDetailPage = (props: InvoiceDetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Invoice Detail">
          <InvoiceDetail {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default InvoiceDetailPage;
