import { HStack, Input, Button } from '@chakra-ui/react';

const PromotionInputForm: React.FC = () => {
  return (
    <HStack w="full">
      <Input placeholder="Promotion Code" />
      <Button id="promotionApplyButton" colorScheme="teal">
        Apply
      </Button>
    </HStack>
  );
};

export default PromotionInputForm;
