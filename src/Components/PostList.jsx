import { useContext, useEffect, useState } from "react";
import Post from "./Post"
import {PostList as PostListData} from "../store/post-list-store";
import Welcomemsg from "./Welcomemsg";
import LoadingState from "./Loadingstate";


const PostList = () =>{
  const {postList,addInitialPosts} = useContext(PostListData);
  const [fetching,setFetching]=useState(false);
  //console.log(postList);

  useEffect(()=>{
      //console.log("button clicked");
      setFetching(true);
      const controller =new AbortController();
      const signal = controller.signal;
      fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
      return () => {
        console.log("cleanup useeffect");
        controller.abort();
      };
  },[]);
  return(
   
    <>
    {fetching && (<LoadingState/>)}

   {!fetching && postList.length === 0 && (<Welcomemsg ></Welcomemsg>)}
    {!fetching && postList.map((post) => (<Post key={post.id} post={post}/>))}
    </>
          
        
    
    
  );
};
export default PostList;