
import { useContext } from 'react'
import { PostList as PostListData } from '../store/post-list-store'
import Post from '../components/Post'
const PostList = () => {
  //not getting the props but getting the object from the context
  //from the postlistdata we are getting postlist upon destructring
  const {postList}=useContext(PostListData);
  return (
    //ws getting the error because of {PostList} instaed should have write {postList }->js is case sensitve
    <>

{postList.map((post)=><Post key={post.id} post={post} />)}

    </>
  )
}

export default PostList