import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import { useFetch } from '../utils/hooks/useFetch';
import { getNewsCategoriesEndpoint } from '../api/endpoints';
import NewsCardList from '../components/NewsCardList';
import { newsCategoryAdapter } from '../adapters/newsCategory';

function NewsCategory() {
  const { categoryId } = useParams();
  const newsCategoryEndpoint = getNewsCategoriesEndpoint(categoryId);
  const newsData = useFetch(newsCategoryEndpoint);
  const newsList = newsCategoryAdapter(newsData);
  const newsCategory = categoryId.toUpperCase();

  return (
    <Layout>
      <Container>
        <h1>{newsCategory}</h1>
        <NewsCardList cardList={newsList} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
