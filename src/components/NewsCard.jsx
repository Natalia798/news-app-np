import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function NewsCard(props) {
  const { image, title, description, id } = props;
  const encodedId = encodeURIComponent(id);
  return (
    <Link to={`/news/${encodedId}`}>
      <Card key={id} className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default NewsCard;
