import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { DetailNextPageProps } from 'pages/detail';
import Detail from './Detail';

const DetailPage = (props: DetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <Detail {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default DetailPage;
