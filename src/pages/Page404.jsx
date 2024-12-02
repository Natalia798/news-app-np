import './Page404.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="Page404 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">
          Avem o știre nu tocmai grozavă... pagina pe care ai încercat să o
          accesezi nu (mai) există.
        </p>
        <strong className="error404">404 :(</strong>
        <p className="h4 text-center">
          <Link to="/">Hai înapoi pe site</Link> să vezi o nouă știre!
        </p>
      </Container>
    </div>
  );
}

export default Page404;
