import { Footer } from '@/components/shared/footertmp';
import { SidebarWithHeader } from '@/components/shared/Header';
import { DashboardNextPageProps } from 'pages/admin/dashboard';
import Dashboard from './Dashboard';

const DashboardPage = (props: DashboardNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <Dashboard {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default DashboardPage;
