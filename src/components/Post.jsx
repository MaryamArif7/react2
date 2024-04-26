/* eslint-disable react/prop-types */
import { useContext } from "react"
import {PostList } from "../store/post-list-store"
//delteing the post is the responsibilty of the->store file
const Post = ({post}) => {
  const {deletePost}=useContext(PostList);
  return (
    <>
<div className="card post-card"  style={{ width: "30rem" }}>

  <div className="card-body">

    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 star-100 translate-middle badge rounded-pill bg-danger"><button onClick={()=>deletePost(post.id)}>Delete</button></span>
    <p>{post.body}</p>
    {post.tags.map((tag)=>(  <span key={tag} className="badge text-bg-primary tag">{tag}</span>))}

    <div className="alert alert-success reactions" role="alert">This Post has been reacted by <span> </span> 
{post.reactions} people
</div>

  </div>
</div>

    </>
  )
}

export default Post