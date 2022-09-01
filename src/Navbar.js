import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { context } from "./Context/context.js";

const Navbar = () => {

   const { state: ContextState, logout } = useContext(context);

   const { isLoginPending, isLoggedIn, loginError } = ContextState;
   let navigate = useNavigate()

   const onLogout = (e) => {
      e.preventDefault();
      logout();
      navigate('/') 

    }

   

    return(
    <div style={{"display" : 'flex', "alignItems": 'center',"justifyContent": 'space-between ',
                 'backgroundColor': 'white', 'padding':'10px'}}>
            <h3 style ={{'marginLeft':'100px', }}> Logo</h3>



    { isLoggedIn  ? (<> 
    <div style={{'marginRight':'101px'}}>
    <Link to='/' style={{'textDecoration': "none", 'marginRight' :'20px'}}><b>Home</b> </Link>
   <b style={{'color' :'#ed0c39', }}>Posts </b> 
                     <button style={ {'backgroundColor' : '#ed0c39','border': "none",
                      'color': "white",'padding': "10px 30px  ",'textAlign': "center",
                      'textDecoration': "none",'fontSize': "16px",'borderRadius':'10px', 
                      'alignItems':'center','marginLeft' :'20px'}}
                      onClick={onLogout}
                      >
                       Logout
                    </button></div>
     </> ): <>
     <div style={{'marginRight':'100px'}} >
                <Link to='/' style={{'textDecoration': "none"}}> <b style={{'color' :'#ed0c39', }}>Home </b> </Link>
                    <Link to='/Login'> <button style={ {'backgroundColor' : '#ed0c39','border': "none",
                      'color': "white",'padding': "10px 30px  ",'textAlign': "center",
                      'textDecoration': "none",'fontSize': "18px",'borderRadius':'10px', 
                      'alignItems':'center','lineHeight':'22.5px','marginLeft' :'20px'}}>
                       Login
                    </button></Link>
              </div>
     </>}
             
        </div>
       )
}


export default Navbar;
