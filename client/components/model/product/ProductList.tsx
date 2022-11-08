import { Grid, GridItem } from '@chakra-ui/react';
import Product from './Product';
import { memo } from 'react';
import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { TSelectedOrder } from '@/components/page/Top';

interface ProductListProps {
  products: QueryProductFindMany_productFindMany[];
  selectedOrder: TSelectedOrder;
  handleProductClick: (product: QueryProductFindMany_productFindMany) => void;
}
const ProductList = memo(
  ({ products, selectedOrder, handleProductClick }: ProductListProps) => {
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
                handleClick={() => handleProductClick(p)}
              />
            </GridItem>
          ))}
      </Grid>
    );
  }
);
ProductList.displayName = 'ProductList';

export default ProductList;
