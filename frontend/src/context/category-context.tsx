import React, { useState } from 'react';

export const CategoryContext = React.createContext({
  categories: [],
  selectedCategory: {},
  chnageCategories: ([]) => {},
  changeSelectedCategory: ({}) => {},
});

export const CategoryContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleChangeCategories = (data) => {
    setCategories([...data]);
  };

  const handleChangeSelectedCategory = (data) => {
    setSelectedCategory({ ...data });
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        selectedCategory,
        chnageCategories: handleChangeCategories,
        changeSelectedCategory: handleChangeSelectedCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
