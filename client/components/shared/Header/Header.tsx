import { useDisclosure, Container } from '@chakra-ui/react';
import { ProfileMenuList, ProfileNav, SignInLinkButton } from '.';

const Header = ({ isLoggedIn = false }: { isLoggedIn?: boolean }) => {
  const { onOpen } = useDisclosure();
  return (
    <Container maxW={'5xl'}>
      <ProfileNav onOpen={onOpen}>
        {isLoggedIn ? <ProfileMenuList /> : <SignInLinkButton />}
      </ProfileNav>
    </Container>
  );
};

export default Header;
