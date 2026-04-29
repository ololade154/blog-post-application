import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
export const Create = () => {
  const navigate = useNavigate();
  const { setPosts } = useOutletContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title: title, body: body, userId: 1 };
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((prev) => [data, ...prev]);
        navigate("/");
      });
  };
  return (
    <div className=" w-full md:max-w-xl mx-auto flex flex-col ">
      <h1 className="font-bold md:text-[25px] text-center text-[#f1356d] md:mb-10">
        Add a new Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="block text-left">Blog title:</label>
        <input
          type="text"
          required
          className="w-full md:mt-5 md:mb-5 border border-[#ddd] block md:px-2 md:py-1 outline-0"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className="block text-left">Blog body:</label>
        <textarea
          required
          className="w-full md:mt-5 md:mb-5 border border-[#ddd] block md:px-2 md:py-2 outline-0"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <button className="bg-[#f1356d] text-white cursor-pointer md:px-6 md:py-2 md:rounded-md">
          Add Blog
        </button>
      </form>
    </div>
  );
};
