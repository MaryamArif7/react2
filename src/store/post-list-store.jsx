{/*  ->PostList is an object which postlist got from createccontext 
    ->made that react component and it will get children in props ,we wil render that
    ->postlistprpovider will wrap the whole app uder it , if any childeren need postlist can get it from it 
    ->make sure to use "children" with small c not capital c otheriwse it wil throw the big error ,the children with captil C
    exist in the react so it wil get confused

*/}
import {  createContext, useReducer } from "react";
//anything we pass in the createConetxt comes in the autocomplete
//->we need two actions tooo for creating and deleting the post
//->basically the blow has three things and it also known as api desiging  , this
//->is designed on the basis of perfect structure for the one who will cnsume it
//->it we should take care what type of data is needed to the compenents
//->in this postlist needs list  so it should be the array so it can render the list of the posts 
//and -> another component createPost needs methods so when someone create the post and press submit ,it gives the values this means
//it has dispatched an action and final change or render is reducer function duty
//->PostList is the object which will be used in the postlist 
export const PostList =createContext( {
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
    addPosts:()=>{}
});
//->the postlist  is a reducer funcion ,it takes two arguments one is current value 
  //and another argument is action
//->if the id of the post doenst match keep that post , delete the remaing one 
//then the reducer will repaint the postlist as the postlist has been changed
const postListReducer=( currPostList,action)=>{
    let currentPostList=currPostList;
    if(action.type==="DELETE_POST"){
        currentPostList=currPostList.filter(post=>post.id !==action.payload.postId);

    }
    else if(action.type==="ADD_POST"){
        currentPostList=[action.payload,...currPostList]
    }
    else if(action.type==="ADD_POSTS"){
        currentPostList=action.payload.posts
    }
    return currentPostList;
}

//we need post list state can be made too ,and we know post is complex so we can use reducer 
//->reducer take two values one is reducer function and other is defaukt values 
//->reducer return two things one is post list and another is dispatch
//->we need to pass the reducer function in usereducer and default values of the values in the createcontext
// eslint-disable-next-line react/prop-types
const PostListProvider=({children})=>{
 //->useReducer is like a state ,it has default value and the  default postlist can 
 //also acess the default list and post list is passed to the context   
 const [postList,dispatch]=useReducer(postListReducer,[]);
 //->post list for the reducer 
 //->the post list and other two metods for the conext provider that means if anyone tries to get the 
 //post list then they will get vlaues 

 const addPost=(userid,title,body,react,hash)=>{
    dispatch({
        type:"ADD_POST",
        payload:{
        id:Date.now(),
        title:title,
        body:body,
        reactions:react,
        userId:userid,
        tags:hash,
        },
        
    })
    
     };
     
 const addPosts=(posts)=>{
    dispatch({
        type:"ADD_POSTS",
        payload:{
        id:posts,
        },
        
    })
    
     };
 //action will go the postlistreducer which has current post list and action which is delete
 //postid is not defined->error->if not passed in the deletPost action
 const deletePost=(postId)=>{
dispatch({
    type:"DELETE_POST",
    payload:{
        
            postId,
        
    },
})

 };
return <PostList.Provider value={
   { postList:postList,
    addPost:addPost,
    deletePost:deletePost,
    addPosts:addPosts


}
}>
    {children}
</PostList.Provider>
}
//with the same id ,if the delete button was clicked it was deleting both posts


export default PostListProvider;
