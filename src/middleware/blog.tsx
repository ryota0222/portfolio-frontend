import { createContext, useContext, useState } from 'react'

const BlogContext = createContext({
  tag: '',
  setTag: (value) => {},
  searchWord: '',
  setSearchWord: (value) => {},
})

const BlogProvider = ({ children }) => {
  const [tag, setTag] = useState('')
  const [searchWord, setSearchWord] = useState('')
  return (
    <BlogContext.Provider value={{ tag, setTag, searchWord, setSearchWord }}>
      {children}
    </BlogContext.Provider>
  )
}

const useBlogContext = () => useContext(BlogContext)

export { BlogProvider, useBlogContext }
