import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
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
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { createIcon } from '@chakra-ui/icons';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

const SidebarWithHeader = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
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
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const DocumentIcon = createIcon({
  displayName: 'DocumentIcon',
  viewBox: '0 0 24 24',
  path: (
    <g>
      <path
        fill="currentColor"
        d="M18.809 10.344h-6.153a2.11 2.11 0 01-2.11-2.11V2.083a.176.176 0 00-.175-.176H6.328A2.812 2.812 0 003.516 4.72v14.063a2.812 2.812 0 002.812 2.812h9.844a2.812 2.812 0 002.812-2.813V10.52a.176.176 0 00-.175-.176z"
      />
      <path
        fill="currentColor"
        d="M18.423 8.789l-6.32-6.32a.088.088 0 00-.15.062v5.705a.703.703 0 00.703.703h5.705a.088.088 0 00.062-.15z"
      />
    </g>
  ),
});

export const StatsIcon = createIcon({
  displayName: 'StatsIcon',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill="currentColor"
      d="M4.57 22.297H3.164a1.055 1.055 0 01-1.055-1.054v-6.328a1.055 1.055 0 011.055-1.055H4.57a1.055 1.055 0 011.055 1.055v6.328a1.055 1.055 0 01-1.055 1.054zM14.414 22.296h-1.406a1.055 1.055 0 01-1.055-1.055V10.695a1.055 1.055 0 011.055-1.055h1.406a1.055 1.055 0 011.055 1.055V21.24a1.055 1.055 0 01-1.055 1.055zM19.336 22.297H17.93a1.055 1.055 0 01-1.055-1.055V5.773A1.055 1.055 0 0117.93 4.72h1.406a1.055 1.055 0 011.055 1.054v15.47a1.055 1.055 0 01-1.055 1.054zM9.492 22.297H8.086a1.055 1.055 0 01-1.055-1.055V2.257a1.055 1.055 0 011.055-1.054h1.406a1.055 1.055 0 011.055 1.054v18.985a1.055 1.055 0 01-1.055 1.055z"
    />
  ),
});

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const activeBg = useColorModeValue('white', 'gray.700');
  const inactiveBg = useColorModeValue('white', 'gray.700');
  const activeColor = useColorModeValue('gray.700', 'white');
  const inactiveColor = useColorModeValue('gray.400', 'gray.400');
  return (
    <Box
      transition="3s ease"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Divider />
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <div>
        <Text
          color={activeColor}
          fontWeight="bold"
          mb={{
            xl: '12px',
          }}
          mx="auto"
          ps={{
            sm: '10px',
            xl: '16px',
          }}
          py="12px"
        >
          Category
        </Text>
      </div>
      <Button
        boxSize="initial"
        justifyContent="flex-start"
        alignItems="center"
        bg={activeBg}
        mb={{
          xl: '12px',
        }}
        mx={{
          xl: 'auto',
        }}
        ps={{
          sm: '10px',
          xl: '16px',
        }}
        py="12px"
        borderRadius="15px"
        w="100%"
        _active={{
          bg: 'inherit',
          transform: 'none',
          borderColor: 'transparent',
        }}
        _focus={{
          boxShadow: 'none',
        }}
      >
        <Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'12px'}
            bg="teal.300"
            color="white"
            h="30px"
            w="30px"
            me="12px"
          >
            <StatsIcon />
          </Flex>
          <Text color={activeColor} my="auto" fontSize="sm">
            Document
          </Text>
        </Flex>
      </Button>
      <Button
        boxSize="initial"
        justifyContent="flex-start"
        alignItems="center"
        bg="transparent"
        mb={{
          xl: '12px',
        }}
        mx={{
          xl: 'auto',
        }}
        ps={{
          sm: '10px',
          xl: '16px',
        }}
        py="12px"
        borderRadius="15px"
        w="100%"
        _active={{
          bg: 'inherit',
          transform: 'none',
          borderColor: 'transparent',
        }}
        _focus={{
          boxShadow: 'none',
        }}
      >
        <Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'12px'}
            bg={inactiveBg}
            color="teal.300"
            h="30px"
            w="30px"
            me="12px"
          >
            <StatsIcon />
          </Flex>
          <Text color={inactiveColor} my="auto" fontSize="sm">
            Document
          </Text>
        </Flex>
      </Button>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
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

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

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
