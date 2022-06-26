import { useState, useEffect } from "react";

function useQuery(path) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    fetch(`http://localhost:4000/${path}`)
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoaded(true);
      });
  }, [path]);

  return{
    data, isLoaded
  }
}

export default useQuery;
