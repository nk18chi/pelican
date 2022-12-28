import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { UserProfileNextPageProps } from 'pages/admin/user-profile';
import UserProfile from './UserProfile';

const UserProfilePage = (props: UserProfileNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="User Profile">
          <UserProfile {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default UserProfilePage;
