import { createContext, useState, Dispatch, SetStateAction } from 'react';

import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { QueryPlanFindMany_planFindMany } from '@/generated/QueryPlanFindMany';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';

export type TSelectedOrder = {
  phone?: QueryProductFindMany_productFindMany;
  plan?: QueryPlanFindMany_planFindMany;
  options?: QueryPlanOptionFindMany_planOptionFindMany[];
};
export const TopContext = createContext<{
  selectedOrder?: TSelectedOrder;
  setSelectedOrder?: Dispatch<SetStateAction<TSelectedOrder>>;
}>({});

interface TopContextProviderProps {
  children: JSX.Element;
}
const TopContextProvider: React.FC<TopContextProviderProps> = ({
  children,
}) => {
  const [selectedOrder, setSelectedOrder] = useState<TSelectedOrder>({
    options: [],
  });
  return (
    <TopContext.Provider value={{ selectedOrder, setSelectedOrder }}>
      {children}
    </TopContext.Provider>
  );
};

export default TopContextProvider;
