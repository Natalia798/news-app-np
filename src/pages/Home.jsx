import Layout from '../components/Layout';
import { getCategoryNewsEndpoint } from '../api/the-guardian';
import { useFetch } from '../hooks/useFetch';

function Home() {
  const footballEndpoint = getCategoryNewsEndpoint();
  const footballNews = useFetch(footballEndpoint);
  console.log(footballNews);

  const technologyEndpoint = getCategoryNewsEndpoint('technology', 10, 2);
  const technologyNews = useFetch(technologyEndpoint);
  console.log(technologyNews);

  return (
    <div>
      <Layout>Home</Layout>
    </div>
  );
}

export default Home;
