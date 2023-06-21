// import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
 import useFetch from "./useFetch";

    const Home=() => {
        const{error,isloading,data:blogs}=useFetch('http://localhost:8000/blogs')
        
        
    
    
    
    return(
        <div classname="home">
            { error && <div>{ error }</div> }
            {isloading && <div>Pending...</div>}
            {blogs && <Bloglist blogs ={blogs} title="All Blogs !" /> }
        </div>
    );
    }
export default Home;