import { useRouter } from 'next/router';
import { Flex, Text, Button } from '@chakra-ui/react';

const SignInLinkButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        router.push(`/signin`);
      }}
      bg="none"
      boxSize="initial"
      justifyContent="flex-end"
      alignItems="center"
      p="12px"
      _active={{
        bg: 'inherit',
        transform: 'none',
        borderColor: 'transparent',
      }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex>
        <Text my="auto" fontSize="sm">
          Sign In
        </Text>
      </Flex>
    </Button>
  );
};

export default SignInLinkButton;
