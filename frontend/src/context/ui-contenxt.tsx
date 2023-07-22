import React, { useState } from 'react'

export const UIContext = React.createContext({
  pageLoading: false,
  changePageLoading: (payload: boolean) => {},
})

export const UIContextProvider = (props) => {
  const [pageLoading, setPageLoading] = useState(false)

  const handlePageLoading = (payload) => {
    setPageLoading(payload)
  }

  return (
    <UIContext.Provider
      value={{
        pageLoading,
        changePageLoading: handlePageLoading,
      }}
    >
      {props.children}
    </UIContext.Provider>
  )
}
