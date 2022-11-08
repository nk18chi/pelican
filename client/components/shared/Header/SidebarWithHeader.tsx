import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  Button,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { FaRegMoneyBillAlt, FaUsers, FaListUl } from 'react-icons/fa';
import { HiDeviceMobile } from 'react-icons/hi';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { StatsIcon } from '../Icon';
import { AiFillTags } from 'react-icons/ai';
import { ProfileNav, ProfileMenuList, SignInLinkButton } from '.';

const SidebarWithHeader = ({
  isLoggedIn = true,
  children,
}: {
  isLoggedIn?: boolean;
  children: ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      {/* laptop  */}
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      {/* mobile */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Box px="4">
        <ProfileNav onOpen={onOpen}>
          {isLoggedIn ? <ProfileMenuList /> : <SignInLinkButton />}
        </ProfileNav>
      </Box>

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

const links = [
  { label: 'Dashboard', icon: <StatsIcon />, href: 'dashboard' },
  { label: 'Customers', icon: <Icon as={FaUsers} />, href: 'customer' },
  { label: 'Phones', icon: <Icon as={HiDeviceMobile} />, href: 'product' },
  { label: 'Plans', icon: <Icon as={FaListUl} />, href: 'plan' },
  {
    label: 'PlanOptions',
    icon: <Icon as={MdOutlinePlaylistAdd} />,
    href: 'planOption',
  },
  { label: 'Promotion', icon: <Icon as={AiFillTags} />, href: 'promotion' },
  {
    label: 'Invoices',
    icon: <Icon as={FaRegMoneyBillAlt} />,
    href: 'invoice',
  },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  const activeBg = useColorModeValue('white', 'gray.700');
  const inactiveBg = useColorModeValue('white', 'gray.700');
  const activeColor = useColorModeValue('gray.700', 'white');
  const inactiveColor = useColorModeValue('gray.400', 'gray.400');
  return (
    <Box
      transition="3s ease"
      w={{ base: 'full', md: 60 }}
      pos="absolute"
      h="full"
      p="8px"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Divider mb="8px" />
      {links.map((link) => {
        if (!router) return null;
        const active = !!router.asPath.match(`${link.href}($|\\/[0-9]+)`);
        return (
          <Button
            key={link.label}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/admin/${link.href}`);
            }}
            boxSize="initial"
            justifyContent="flex-start"
            alignItems="center"
            bg={active ? activeBg : 'transparent'}
            mb={{ xl: '12px' }}
            mx={{ xl: 'auto' }}
            p="12px"
            borderRadius="15px"
            w="100%"
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent',
            }}
            _focus={{ boxShadow: 'none' }}
          >
            <Flex>
              <Flex
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={'12px'}
                bg={active ? 'teal.300' : inactiveBg}
                color={active ? 'white' : 'teal.300'}
                h="30px"
                w="30px"
                me="12px"
              >
                {link.icon}
              </Flex>
              <Text
                color={active ? activeColor : inactiveColor}
                my="auto"
                fontSize="sm"
              >
                {link.label}
              </Text>
            </Flex>
          </Button>
        );
      })}
    </Box>
  );
};

export default SidebarWithHeader;
