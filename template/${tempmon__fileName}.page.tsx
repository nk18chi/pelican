import { Footer } from '@/components/shared/Footer';
import { SidebarWithHeader } from '@/components/shared/Header';
import { ${tempmon__fileName}NextPageProps } from 'pages/${tempmon__fileName__lowercase}';
import ${tempmon__fileName} from './${tempmon__fileName}';

const ${tempmon__fileName}Page = (props: ${tempmon__fileName}NextPageProps) => {
  return (
    <>
      <SidebarWithHeader>
        <${tempmon__fileName} {...props} />
      </SidebarWithHeader>
      <Footer />
    </>
  );
};

export default ${tempmon__fileName}Page;
