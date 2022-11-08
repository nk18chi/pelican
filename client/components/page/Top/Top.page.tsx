import { Header } from '@/components/shared/Header';
import { TopNextPageProps } from 'pages';
import Top from './Top';

const TopPage = (props: TopNextPageProps) => {
  return (
    <>
      <Header />
      <Top {...props} />
    </>
  );
};

export default TopPage;
