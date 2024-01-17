import { useRef } from "react";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost=()=>{
  const {addPost}=useContext(PostList);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postContentElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const onHandleSubmit=(event)=>{
      event.preventDefault();
      const userId=userIdElement.current.value;
      const postTitle=postTitleElement.current.value;
      const postContent=postContentElement.current.value;
      const reactions=reactionsElement.current.value;
      const Tags=tagsElement.current.value.split(" ");

      userIdElement.current.value="";
      postTitleElement.current.value="";
      postContentElement.current.value="";
      reactionsElement.current.value="";
      tagsElement.current.value="";
      
      addPost(userId,postTitle,postContent,reactions,Tags);
  }
  return(
        <>
        <form className="create-post" onSubmit={onHandleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input 
    type="text" 
    className="form-control" 
    id="userId" 
    ref={userIdElement}
    placeholder="Enter your UserId" 
    style={{border:"1px solid black"}}
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="PostTitle" className="form-label">Post Title</label>
    <input 
    type="text" 
    className="form-control"
    id="PostTitle"
    ref={postTitleElement} 
    placeholder="Enter post title"
    style={{border:"1px solid black"}}
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="postContent" className="form-label">Post Content</label>
    <input
     type="textarea" rows="4" 
    
     className="form-control" 
     id="postContent"
     ref={postContentElement} 
     placeholder="Enter here post description"
     style={{border:"1px solid black"}}
     />
    
  </div>
  <div className="mb-3">
    <label htmlFor="Reactions" className="form-label">Reactions</label>
    <input
     type="text" 
     className="form-control" 
     id="Reactions" 
     ref={reactionsElement}
     placeholder="How many people reacte to this post"
     style={{border:"1px solid black"}}
     />
    
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input 
    type="text" 
    className="form-control"
     id="tags"
     ref={tagsElement}
     placeholder="Enter the tags"
     style={{border:"1px solid black"}}
     />
   
  </div>
  
  
  <button type="submit" onClick={onHandleSubmit} className="btn btn-primary">Post</button>
</form>
        </>
    );
}
export default CreatePost;