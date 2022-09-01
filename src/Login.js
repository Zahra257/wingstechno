import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
 import {useNavigate} from 'react-router-dom'
import { context } from "./Context/context.js";



const Login = () => {

  const { state: ContextState, login } = useContext(context);
  const { isLoginPending, isLoggedIn, loginError } = ContextState;
 

  const { register, handleSubmit ,formState: { errors } } = useForm();
  console.log(register)
const onSubmit = (data) =>  {
  login(data)
};

let navigate = useNavigate()

useEffect(() => {
  if(isLoggedIn) {
    navigate('/Posts/') 

  }
})
    return(
       
  <>
    <form style={{'borderRadius':'10px','width':'250px','padding': '60px', 'marginLeft': '450px', 'marginTop': '50px','height': '300px',
                  'backgroundColor':'white'}} 
    onSubmit={handleSubmit(onSubmit)}>
    <h2> Login</h2>
    {loginError && <div style={{'background':'pink', 'padding':'10px'}}>{loginError.message}</div>}

    {errors.email && <p style={{'background':'pink', 'padding':'10px'}}>email is required.</p>}

     email <input style={ {'background-color': '#eee','width': '100%','border': 'none', 'height': '50px',
	 'borderRadius':'10px', 'alignItems':'center',}} 

   {...register("email", { required: true })} placeholder="email@exemple.com"  />
       {errors.Password && <p style={{'background':'pink', 'padding':'10px'}}>password is required.</p>}

      Password <input style={ {'background-color': '#eee','border': 'none', 
      'borderRadius':'10px', 'width':'100%',   'height': '50px',}} 
      {...register("Password", { required: true })} placeholder="password" />
      
      <button style={ {'backgroundColor' : '#ed0c39','border': "none", 'padding': '17px',
                      'color': "white",'width': "100%  ",'textAlign': "center",
                      'textDecoration': "none",'fontSize': "18px",'borderRadius':'10px', 
                      'alignItems':'center'}}>
                      <b>Login</b> 
                    </button>   
                    
   </form>
                    
        
        </>
    )
}

export default Login;