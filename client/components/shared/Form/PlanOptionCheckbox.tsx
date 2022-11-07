import { Checkbox, Stack } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';
import { currencyFormat } from '../../function/utils/format';

interface PlanOptionCheckboxProps {
  planOptions: QueryPlanOptionFindMany_planOptionFindMany[];
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PlanOptionCheckbox = ({
  planOptions,
  handleCheckboxChange,
}: PlanOptionCheckboxProps) => {
  return (
    <Stack direction="column">
      {planOptions.map((option) => (
        <Checkbox
          key={option._id}
          size="lg"
          colorScheme="green"
          w="100%"
          onChange={handleCheckboxChange}
        >
          <p>{option.label}</p>
          <p>
            {currencyFormat({ n: option.price })}
            /mo
          </p>
        </Checkbox>
      ))}
    </Stack>
  );
};

export default PlanOptionCheckbox;
