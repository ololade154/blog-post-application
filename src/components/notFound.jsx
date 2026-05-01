import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Sorry</h1>
      <p>The page can not found </p>
      <Link to="/">Back to Homepage ....</Link>
    </div>
  );
};
