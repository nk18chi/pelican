import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { UserProfileNextPageProps } from 'pages/user-profile';
import UserProfile from './UserProfile';

const UserProfilePage = (props: UserProfileNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <UserProfile {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default UserProfilePage;
