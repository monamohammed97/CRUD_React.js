import { Col } from "react-bootstrap";
import { useRouteError, Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  return (
    <Col xs={6} id="error-page" className="m-auto mt-5">
      <h1 className="text-center">Oops!</h1>
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="d-block text-center">Go To Home</Link>
      <button onClick={()=>navigate('/', {replace: true})} className="d-block text-center">Go To Home</button>
    </Col>
  );
}
