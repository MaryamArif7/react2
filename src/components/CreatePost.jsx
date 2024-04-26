/* eslint-disable no-unused-vars */

import {PostList} from "../store/post-list-store";
import { useRef,useContext } from "react";

const CreatePost = () => {

  const {addPost}= useContext(PostList);
  const userId=useRef();
  const titleId=useRef();
  const postBody=useRef();
  const reactions=useRef();
  const tags=useRef();
  const handleSubmit=( event)=>{
event.preventDefault();
const userid=userId.current.value;
const title=titleId.current.value;
const body=postBody.current.value;
const react=reactions.current.value;
const hash=tags.current.value.split('');
const addPost=(userid,title,body,react,hash)=>{
  console.log("working fine");
}
  }
  return (
    <>
<form className="post" onSubmit={handleSubmit}>
<div className="mb-3">
    <label className="form-label"> Your Username</label>
    <input type="text" ref={userId} className="form-control" id="Username" placeholder="Enter the title of your User Id"/>
  </div>
  <div className="mb-3">
    <label className="form-label" ref={titleId}> Post Title</label>
    <input type="text" className="form-control" id="title" placeholder="Enter the title of your post"/>
  </div>
  <div className="mb-3">
    <label className="form-label" ref={postBody}> Post content</label>
    <textarea type="text" rows={4}  className="form-control " id="body" placeholder="Tell us how youre feeling"/>
  </div>
  <div className="mb-3">
    <label className="form-label" ref={reactions}> Number Of Reactions</label>
    <input type="text" className="form-control" id="reactions" placeholder="How many people Reacted"/>
  </div>
  <div className="mb-3">
    <label className="form-label" ref={tags}> Tell us your favorite tags</label>
    <input type="text" className="form-control" id="tags" placeholder="Enter Your hashtags"/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
  )
}

export default CreatePost;