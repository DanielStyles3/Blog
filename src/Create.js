import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const[author,setAuthor]=useState('')
    const[isLoading,setisLoading]=useState(false)
    const history=useHistory();
    const handleSubmit=(e) =>{
        e.preventDefault();
        const blog ={title,body,author};

        setisLoading(true);

        fetch('  http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setisLoading(false);
        history.push('./')
    });
        

    }
    return ( 
        <div className="create">
            <h2>Add a New Blog! </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}

            ></textarea>
            <label>Blog Author:</label>
            <select
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            >
                <option value="Daniel">Daniel</option>
                <option value="Styles">Styles</option>

            </select>
            {!isLoading&&<button>Add Blog</button>}
            {isLoading && <button disabled>Adding blog.....</button>}
            </form>
        </div>
     );
}
 
export default Create;