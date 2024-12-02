import React from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import { useFetch } from '../utils/hooks/useFetch';
import { getNewsCategoriesEndpoint } from '../api/endpoints';
// import NewsCard from '../components/NewsCard';
import NewsCardList from '../components/NewsCardList';
import { newsCategoryAdapter } from '../adapters/newsCategory';

function Home() {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint('technology', 1, 8);
  const footballNewsEndpoint = getNewsCategoriesEndpoint('football', 1, 8);
  const technologyData = useFetch(technologyNewsEndpoint);
  const footballData = useFetch(footballNewsEndpoint);
  const technologyNews = newsCategoryAdapter(technologyData);
  const footballNews = newsCategoryAdapter(footballData);

  return (
    <Layout>
      <section className="tech">
        <Container>
          <h1>Tech</h1>
          <NewsCardList cardList={technologyNews} />
        </Container>
      </section>
      <section className="football">
        <Container>
          <h1>Fotbal</h1>
          <NewsCardList cardList={footballNews} />
        </Container>
      </section>
      <section className="favorites">
        <Container>
          <h1>Favorite</h1>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
