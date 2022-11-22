import React, { useState } from 'react';

export const PostContext = React.createContext({
  posts: [],
  selectedCategory: {},
  changePosts: ([]) => {},
  changeSelectedCategory: ({}) => {},
});

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const changePostsHandler = (data) => {
    setPosts([...data]);
  };

  const changeSelectedCategoryHandler = (data) => {
    setSelectedCategory({ ...data });
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        selectedCategory,
        changePosts: changePostsHandler,
        changeSelectedCategory: changeSelectedCategoryHandler,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
