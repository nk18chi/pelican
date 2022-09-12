import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { ListNextPageProps } from 'pages/list';
import List from './List';

const ListPage = (props: ListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <List {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default ListPage;
