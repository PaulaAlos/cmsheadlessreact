import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lista de posts:</h1>
      <ul>
        {posts.map((post) => ( 
          <li key={post.id}>
            <article>
              <h2>{post.title.rendered}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
