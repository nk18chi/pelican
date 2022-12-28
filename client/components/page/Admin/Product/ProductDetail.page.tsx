import BannerCover from '@/components/layout/BannerCover';
import { Footer } from '@/components/shared/footertmp';
import { SidebarWithHeader } from '@/components/shared/Header';
import { ProductDetailNextPageProps } from 'pages/admin/product/[productId]';
import ProductDetail from './ProductDetail';

const ProductDetailPage = (props: ProductDetailNextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <BannerCover label="Product Detail">
          <ProductDetail {...props} />
        </BannerCover>
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
