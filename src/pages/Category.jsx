import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

function Category() {
  const { categoryId } = useParams();
  return (
    <div>
      <Layout>{categoryId}</Layout>
    </div>
  );
}

export default Category;
