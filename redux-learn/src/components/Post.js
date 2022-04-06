import { useEffect, useState } from 'react';

export const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}></li>
        ))}
      </ul>
    </div>
  );
};
