import React, { useState } from 'react';

export const PostContext = React.createContext({
  posts: [],
  selectedCategory: {},
  changePosts: ([]) => {},
  changeSelectedCategory: ({}) => {},
});

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleChangePosts = (data) => {
    setPosts([...data]);
  };

  const handleChangeSelectedCategory = (data) => {
    setSelectedCategory({ ...data });
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        selectedCategory,
        changePosts: handleChangePosts,
        changeSelectedCategory: handleChangeSelectedCategory,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
