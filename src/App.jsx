import "./App.css"
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import SideBar from "./components/sideBar";

import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
//->useState -> array destructing allows to extract vales from the array from objects nd assign them to the variables  
//-> selctedTab is the intial value , and SetSelctedTab is the fucntion that will update the current value 
//->these values are stored in variables (selectedTab,setSelctedtab ) using array destuting
  const [selectedTab,setSelectedTab]=useState("Home");
  //everything child in the postlistprpovider will be passed to the postlistprovider as the children as props 
  
  return (
    <PostListProvider>
    <div className="app-container">
     <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
     <div className="content">
      <Header />
      {selectedTab==="Home" ? (<PostList></PostList> ):(<CreatePost> </CreatePost>)}
      

      <Footer/>
      </div>
      </div>
    </PostListProvider>
  );
}

export default App;
