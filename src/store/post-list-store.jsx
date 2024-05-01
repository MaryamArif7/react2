import { createContext, useReducer,useContext } from "react";
  /*
-> usecontext is used to way to manage the state between the child componenets  without having down to pass the props to the child componenets
->we need to create an object basically a context object ,using React.createContext function
->this object returns two things :
-> 1.provider -> provider is used to wrap the whole app that need t acces the shared data->postlistprovider is the provider here
->2.Consumer -> reads the data from the component 
->1st Step:context
           The first step  is to create a context object,here we are creating PostList object using createConttext
           ->this object ccan be used in other components using useConext where there is need to acces the shared data
            ->made that react component and it will get children in props ,we wil render that
          ->postlistprpovider will wrap the whole app uder it , if any childeren need postlist can get it from it 
         ->make sure to use "children" with small c not capital c otheriwse it wil throw the big error ,the children with captil C
           exist in the react so it wil get confused

*/
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {},
});
/*->the postlistreducer funcion :(it doesnt modify the state directly,but creates a new statet then compare
  ->it takes two arguments ->1: is current value 2:action->action is a object
  ->that tell how to update the state->action object has property type.->action object is dispatched by the dispatch
  the flow:
  when the user clicked on event ->deletePost/addPost->this event call dipatch with action object-> react gives action object and current state to reducer
  ->then reducer uses action object perform state update
 */
const postListReducer = (currPostList, action) => {
  let currentPostList = currPostList;
  if (action.type === "DELETE_POST") {
    currentPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    currentPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_POSTS") {
    currentPostList = action.payload.posts;
  }
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  /* 3rd:reducer:
  ->this is used to store the updated state
  ->takes two :1:reducer function,2:intial state
  ->returns:1:an array that holds the current state 2:dispatch function to which we pass an action and later invoke it
here :
reducer function is ->postlistReducer
inital state->empty or default values 
array->postList->contains array of postList and other 3 functions
dispatch->dispatch ->distatch function is a special type fun, which dispches an action object
flow:
  ->we need to pass the reducer function in usereducer and default values of the values in the createcontext
  action will go the postlistreducer which has current post list and action which is delete

 */
 const [postList, dispatch] = useReducer(postListReducer, []);
const addPost = (userid, title, body, react, hash) => {
    dispatch({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: react,
        userId: userid,
        tags: hash,
      },
    });
  };

  const addPosts = (posts) => {
    dispatch({
      type: "ADD_POSTS",
      payload: {
        id: posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  /*2nd step:context 
  ->after we have context object we need to make the context data available to the componnets ,
  we passs it to the provider then the provider is used to wrap the whole application,
  -> the values and children ->the values are the values which we want to pass to ither components who need context
  ->the children ->the other ccompents from app who need context->the children allows to access those components.
  */
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addPosts: addPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
