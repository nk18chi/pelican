import { Checkbox, Stack } from '@chakra-ui/react';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';
import { currencyFormat } from '../../function/utils/format';

interface PlanOptionCheckboxProps {
  planOptions: QueryPlanOptionFindMany_planOptionFindMany[];
  handleCheckboxChange: (
    checked: boolean,
    option: QueryPlanOptionFindMany_planOptionFindMany
  ) => void;
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
          onChange={(e) => handleCheckboxChange(e.target.checked, option)}
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
