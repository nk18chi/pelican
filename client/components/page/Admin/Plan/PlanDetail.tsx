import { ReactHookFormInput, TInputField } from '@/components/shared/Inputtmp';
import { Flex, useColorModeValue, VStack, Button } from '@chakra-ui/react';
import { PlanDetailNextPageProps } from 'pages/admin/plan/[planId]';
import { useForm } from 'react-hook-form';

const inputFields: TInputField[] = [
  {
    name: 'title',
    displayName: 'Title',
    type: 'text',
    validation: { required: true },
  },
  {
    name: 'options',
    displayName: 'Options',
    type: 'textarea',
    validation: { required: true },
  },
  {
    name: 'price',
    displayName: 'Price',
    type: 'number',
    validation: { required: true },
  },
  {
    name: 'createdAt',
    displayName: 'Created At',
    type: 'date',
    validation: { required: true },
    disabled: true,
  },
];

const Detail = (props: PlanDetailNextPageProps) => {
  console.log(props);
  const useFormHooks = useForm({ defaultValues: {} });
  const { handleSubmit } = useFormHooks;
  const borderProfileColor = useColorModeValue(
    'white',
    'rgba(255, 255, 255, 0.31)'
  );
  const bgProfile = useColorModeValue(
    'hsla(0,0%,100%,.8)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = (data: any) => {
    console.log('submit', data);
  };

  return (
    <main>
      <Flex
        direction={{ sm: 'column', md: 'column' }}
        w={{ sm: '100%' }}
        justifyContent={{ sm: 'center', md: 'space-between' }}
        align="center"
        backdropFilter="saturate(200%) blur(50px)"
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        border="2px solid"
        borderColor={borderProfileColor}
        bg={bgProfile}
        p="24px"
        borderRadius="20px"
      >
        <VStack w="100%" spacing="20px" py="4" textAlign="left">
          {inputFields.map((input) => (
            <ReactHookFormInput
              key={input.name}
              {...{
                input,
                useFormHooks,
              }}
            />
          ))}
          <Button
            id="prodileSaveButton"
            colorScheme="teal"
            size="lg"
            onClick={handleSubmit(submitForm)}
          >
            Save
          </Button>
        </VStack>
      </Flex>
    </main>
  );
};

export default Detail;
