import React, { useState } from 'react'
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import BlogList from '../../components/Home/BlogList';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';


const Home = () => {
  const [blogs,setBlogs]=useState(blogList);
  const [searchKey,setSearchKey]=useState('');

    // Search submit
    const handleSearchBar = (e) => {
      e.preventDefault();
      handleSearchResults();
    };
  
    // Search for blog by category
    const handleSearchResults = () => {
      const allBlogs = blogList;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setBlogs(filteredBlogs);
    };
  
    // Clear search and show all blogs
    const handleClearSearch = () => {
      setBlogs(blogList);
      setSearchKey('');
    };



  return (
    <div>
      {/* Page header */}
    <Header/>

      {/* Search bar */}
    <SearchBar value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}/>

      {/* Blog list & empty list */}
      {!blogs.length ? <EmptyList /> :<BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home;
