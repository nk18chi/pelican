import { PlanDetailPage } from '@/components/page/Admin/Plan';
import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';

export interface PlanDetailNextPageProps {
  test: string;
}
const PlanDetailNextPage: NextPage<PlanDetailNextPageProps> = (
  props: PlanDetailNextPageProps
) => {
  return (
    <>
      <Head>
        <title>PlanDetail Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PlanDetailPage {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      test: 'test',
    },
  };
};

export default PlanDetailNextPage;
