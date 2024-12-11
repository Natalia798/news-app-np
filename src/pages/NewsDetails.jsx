import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFetch } from '../utils/hooks/useFetch';
import Alert from 'react-bootstrap/Alert';
import { getNewsDetailsEndpoint } from '../api/endpoints';
import { getNewsDetails } from '../api/adaptors';
import Button from 'react-bootstrap/Button';
import './NewsDetails.css';
import { getFormattedDate } from '../utils/date';
import { addToFavorites } from '../store/Favorites/actions';
import { FavoritesContext } from '../store/Favorites/context';
import useLocalStorage from '../utils/hooks/useLocalStorage';

function NewsDetails() {
  const { favoritesDispatch, favoritesState } = useContext(FavoritesContext);
  let { newsId } = useParams();
  newsId = decodeURIComponent(newsId);
  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  const newsDetails = useFetch(newsDetailsEndpoint);
  const adaptedNewsDetails = getNewsDetails(newsDetails);
  const [isMessageDisplayed, setIsMessageDisplayed] = useState(false);
  // eslint-disable-next-line
  const [_, setLocalStorageState] = useLocalStorage(
    'favorites',
    favoritesState
  );

  useEffect(() => {
    setLocalStorageState(favoritesState);
  }, [favoritesState, setLocalStorageState]);

  const { title, description, image, date, author, content, thumbnail } =
    adaptedNewsDetails;
  const formattedDate = getFormattedDate(date);

  function handleAddToFavorites(product) {
    const actionResult = addToFavorites(product);
    favoritesDispatch(actionResult);
    setIsMessageDisplayed(true);
    setTimeout(() => {
      setIsMessageDisplayed(false);
    }, 2000);
  }

  return (
    <Layout>
      {isMessageDisplayed && (
        <Alert id="alert" variant="success">
          Succes! Poți vedea știrea accesând secțiunea Favorite.
        </Alert>
      )}

      <Container className="NewsDetails my-5">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              dangerouslySetInnerHTML={{ __html: image }}
              className="mb-4"
            ></div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{formattedDate}</p>
              </div>
              <Button
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    thumbnail,
                    title,
                    description,
                    hasCloseButton: true,
                  });
                }}
              >
                Adaugă la favorite
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
