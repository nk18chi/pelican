import { Grid, GridItem } from '@chakra-ui/react';
import Product from './Product';
import { useContext, memo } from 'react';
import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { TopContext } from '@/components/page/Top/TopContextProvider';

interface ProductListProps {
  products: QueryProductFindMany_productFindMany[];
}
const ProductList = memo(({ products }: ProductListProps) => {
  console.log('ProductList');
  const { selectedOrder, setSelectedOrder } = useContext(TopContext);
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {Array.isArray(products) &&
        products.map((p) => (
          <GridItem key={p._id}>
            <Product
              isNewItem={p.isNewItem || false}
              imageURL={p.imageURL}
              name={p.name}
              price={p.price}
              rating={p.rating || 0}
              numReviews={p.numReviews || 0}
              selected={selectedOrder?.phone?._id === p._id}
              handleClick={() =>
                setSelectedOrder &&
                setSelectedOrder((prev) => ({ ...prev, phone: p }))
              }
            />
          </GridItem>
        ))}
    </Grid>
  );
});
ProductList.displayName = 'ProductList';

export default ProductList;
