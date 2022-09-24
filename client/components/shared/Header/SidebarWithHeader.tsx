import React, { ReactNode } from 'react';
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
} from '@chakra-ui/react';
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { createIcon } from '@chakra-ui/icons';
import { Logo } from '../Logo';

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
        <Logo isName={true} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Divider />
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
        bg="inherit"
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
          <Text my="auto" fontSize="sm">
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
