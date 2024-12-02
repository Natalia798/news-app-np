import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCard from './NewsCard';

function NewsCardList(props) {
  const { cardList } = props;
  return (
    <Container>
      <Row>
        {cardList.map((card) => {
          return (
            <Col key={card.id} xs={12} md={6} lg={4} className="mb-3">
              <NewsCard
                image={card.image}
                title={card.title}
                description={card.description}
                id={card.id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default NewsCardList;
