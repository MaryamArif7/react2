/* eslint-disable no-unused-vars */

import { useContext } from 'react'
import { PostList as PostListData } from '../store/post-list-store'
import Post from '../components/Post'
import Message from './Message'
const PostList = () => {
  //not getting the props but getting the object from the context
  //from the postlistdata we are getting postlist upon destructring
  const {postList ,addPosts}=useContext(PostListData);
  const handleClickPost = () => {
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            addPosts(data.posts);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            // Handle the error (e.g., show a message to the user)
        });
};

                
  
  return (
    //ws getting the error because of {PostList} instaed should have write {postList }->js is case sensitve
    <>
{postList.length===0 && <Message onGetPostClick={handleClickPost}/> }
{postList.map((post)=><Post key={post.id} post={post} />)}

    </>
  )
}

export default PostList