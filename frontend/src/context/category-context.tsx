import React, { useCallback, useState } from 'react'

export const CategoryContext = React.createContext({
  categories: [],
  selectedCategory: {},
  changeCategories: ([]) => {},
  changeSelectedCategory: ({}) => {},
})

export const CategoryContextProvider = (props) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])

  const handleChangeCategories = useCallback((data) => {
    setCategories([...data])
  }, [])

  const handleChangeSelectedCategory = useCallback((data) => {
    setSelectedCategory({ ...data })
  }, [])

  return (
    <CategoryContext.Provider
      value={{
        categories,
        selectedCategory,
        changeCategories: handleChangeCategories,
        changeSelectedCategory: handleChangeSelectedCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  )
}
