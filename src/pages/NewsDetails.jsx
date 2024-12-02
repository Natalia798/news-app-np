import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import { getNewsDetailsEndpoint } from '../api/endpoints';
import { useFetch } from '../utils/hooks/useFetch';

function NewsDetails() {
  const { newsId } = useParams();
  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  const newsDetailsData = useFetch(newsDetailsEndpoint);

  let newsTitle = '';
  let newsBody = '';

  if (newsDetailsData) {
    newsTitle = newsDetailsData.response.content.webTitle;
    newsBody = newsDetailsData.response.content.fields.body;
  }

  const markup = { __html: newsBody };

  return (
    <Layout>
      <Container>
        <h1>{newsTitle}</h1>
        <div dangerouslySetInnerHTML={markup} />;
      </Container>
    </Layout>
  );
}

export default NewsDetails;
