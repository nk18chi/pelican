import { SimpleTable } from '@/components/shared/Table';
import { ListNextPageProps } from 'pages/list';

const List = (props: ListNextPageProps) => {
  console.log(props);
  return (
    <main>
      <SimpleTable />
    </main>
  );
};

export default List;
