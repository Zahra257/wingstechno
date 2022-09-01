import React, { useState , useEffect} from 'react'
import  Axios from 'axios'
import {Link} from 'react-router-dom'


const Posts = () => {
     const [List, setList] = useState([]);
     const [error, setError] = useState('');
     const [Loading, setLoading] = useState(true);

 useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setLoading(false)
                setError('')
                setList(response.data) })
            .catch(error => {
                 setList([])
                 setLoading(false)
                 setError(error) })  
                }, [])

     return(
<>
 <h1 style={{'marginLeft':'160px'}}> Posts </h1> 
    <div style={{  'display': 'grid', 'grid-template-columns': 'auto auto auto','justifyContent':'center',  'grid-gap': '30px', 'padding': '10px' }}>
            {Loading && <h1>...loading</h1>}              
           {List.map(e => (
        <div style={{ 'height': '95%', 'backgroundColor':'white', 'borderRadius': '10px', 'padding':'10px ','width': '300px'}}>
          <h2>{e.title}</h2> 
           <span style={{'color':'gray'}}> {e.body}</span><br/>
        </div> ))}         
      {error && <><h1> empty list </h1></> } 
    </div>     
</>
    )

}

export default Posts;
