import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { Logo } from '../Logo';
import { FaRegMoneyBillAlt, FaUsers, FaListUl } from 'react-icons/fa';
import { HiDeviceMobile } from 'react-icons/hi';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { StatsIcon } from '../Icon';
import { AiFillTags } from 'react-icons/ai';

const SidebarWithHeader = ({ children }: { children: ReactNode }) => {
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

      <ProfileNav onOpen={onOpen} />
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
        <Logo isName={true} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Divider mb="8px" />
      {links.map((link) => {
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

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const ProfileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box display={{ base: 'flex', md: 'none' }}>
        <Logo isName={true} boxSize="48px" />
      </Box>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default SidebarWithHeader;
