import { IconButton, Box, Flex, FlexProps } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Logo } from '../Logo';

interface MobileProps extends FlexProps {
  children: JSX.Element;
  onOpen: () => void;
}
const ProfileNav = ({ children, onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      height="20"
      alignItems="center"
      justifyContent={{ base: 'space-between' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box>
        <Logo isName={true} boxSize="48px" />
      </Box>

      {children}
    </Flex>
  );
};

export default ProfileNav;
