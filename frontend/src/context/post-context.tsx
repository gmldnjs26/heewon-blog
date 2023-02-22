import React, { useState } from 'react';

export const PostContext = React.createContext({
  posts: [],
  changePosts: ([]) => {},
});

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const handleChangePosts = (data) => {
    setPosts([...data]);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        changePosts: handleChangePosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
