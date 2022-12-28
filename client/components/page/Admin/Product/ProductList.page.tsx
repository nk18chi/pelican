import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { ProductListNextPageProps } from 'pages/admin/product/';
import ProductList from './ProductList';

const ProductListPage = (props: ProductListNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Product List">
          <ProductList {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default ProductListPage;
