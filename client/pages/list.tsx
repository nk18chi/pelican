import { ListPage } from '@/components/page/List';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

export interface ListNextPageProps {
  test: string;
}
const ListNextPage: NextPage<ListNextPageProps> = (
  props: ListNextPageProps
) => {
  return (
    <>
      <Head>
        <title>List Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListPage {...props} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: 'test',
    },
  };
};

export default ListNextPage;
