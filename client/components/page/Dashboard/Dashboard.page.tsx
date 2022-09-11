import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { DashboardNextPageProps } from 'pages/dashboard';
import Dashoard from './Dashboard';

const DashboardPage = (props: DashboardNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <Dashoard {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default DashboardPage;
