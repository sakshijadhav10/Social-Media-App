import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebr from "./Components/Sidebr";
import CreatePost from './Components/CreatePost';
import PostList from "./Components/PostList";
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  
  const [selectedTab,setSelectedTab]=useState("Home");
  return(

    <PostListProvider>
    <div className="app-container">
    <Sidebr selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    ></Sidebr>
   
    <div className="content">
    <Header></Header>
    {(selectedTab==="Home")?(<PostList></PostList>):
    (<CreatePost></CreatePost>)
  }
    <Footer></Footer>
    </div>
    </div> 
 
  </PostListProvider>
  
  );
  
}

export default App;
