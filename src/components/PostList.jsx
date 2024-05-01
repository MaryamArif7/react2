/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { PostList as PostListData } from '../store/post-list-store';
import Post from '../components/Post';
import Message from './Message';

const PostList = () => {
  
/* ->passing the object whiich was created in the store 
->it has values , so we are destructing the values from it  */
  const { postList, addPosts } = useContext(PostListData);

  const handleClickPost = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addPosts(data.posts);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };
  
  return (
    <>
      {postList.length === 0 && (<Message onGetPostClick={handleClickPost}/> )}
      {postList.map((post) =>( <Post key={post.id} post={post} />))}
    </>
  );
};

export default PostList;
