import { PostList } from "../store/post-list-store";
import { useRef, useContext } from "react";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userId = useRef();
  const titleId = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = userId.current.value;
    const title = titleId.current.value;
    const body = postBody.current.value;
    const react = reactions.current.value;
    const hash = tags.current.value.split(' ');

    // Call addPost function here
    addPost(userid, title, body, react, hash);
  }

  return (
    <>
      <form className="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">Your Username</label>
          <input type="text" ref={userId} className="form-control" id="Username" placeholder="Enter your User Id"/>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref={titleId} className="form-control" id="title" placeholder="Enter the title of your post"/>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post content</label>
          <textarea rows={4} ref={postBody} className="form-control" id="body" placeholder="Tell us how you're feeling"/>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number Of Reactions</label>
          <input type="text" ref={reactions} className="form-control" id="reactions" placeholder="How many people Reacted"/>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tell us your favorite tags</label>
          <input type="text" ref={tags} className="form-control" id="tags" placeholder="Enter Your hashtags"/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </>
  );
}

export default CreatePost;
