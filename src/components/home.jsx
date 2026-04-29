import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const filteredBlogs = posts.filter((post) => post.id !== id);
    setPosts(filteredBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw Error("failed to fetch ");
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data.posts);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsPending(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {!error &&
        posts.map((post) => (
          <div
            key={post.id}
            className="md:mt-10 md:py-6 md:px-10 bg-white border-b border-b-[#fafafa] hover:shadow-sm flex items-center justify-between"
          >
            <div>
              <h2 className="md:text-[20px] font-bold md:mb-8 text-[#f1356d]">
                {post.title}
              </h2>
              <p>{post.body}</p>
              <Link
                className="bg-[rgb(241,53,109)] text-white md:px-2 md:py-1 rounded-md"
                to="/test"
              >
                test
              </Link>
            </div>

            <button
              className="bg-[rgb(241,53,109)] text-white md:px-2 md:py-1 rounded-md"
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      {/* <Outlet /> */}
    </div>
  );
};
