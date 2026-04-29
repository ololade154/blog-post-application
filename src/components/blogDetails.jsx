import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogDetails = () => {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div>
      {isPending && <p>Loading</p>}
      {error && <div>{error}</div>}
      {posts && (
        <div>
          <h2 className="md:text-[20px] font-bold md:mb-8 text-[#f1356d]">
            {posts.title}
          </h2>
          <p>{posts.body}</p>
        </div>
      )}
    </div>
  );
};
