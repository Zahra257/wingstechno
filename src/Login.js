import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
 import {useNavigate} from 'react-router-dom'
import { context } from "./Context/context.js";



const Login = () => {

  const { state: ContextState, login } = useContext(context);
  const {  isLoggedIn, loginError } = ContextState;
  const { register, handleSubmit ,formState: { errors } } = useForm();
  const onSubmit = (data) =>  {
  login(data)
   };

  let navigate = useNavigate()
  
  useEffect(() => {
     if(isLoggedIn) {
      navigate('/Posts') 

  }
})
    
return(
       
      <>
         <form style={{'borderRadius':'10px','width':'250px','padding': '60px', 'marginLeft': '450px', 'marginTop': '50px','height': '100%','backgroundColor':'white'}} onSubmit={handleSubmit(onSubmit)}>
             <h2> Login</h2>
            {loginError && <div style={{'background':'pink', 'padding':'10px'}}>{loginError.message}</div>}
         {errors.email && <p style={{'background':'pink', 'padding':'10px'}}>email is required.</p>}
 email <input style={{'background-color': '#eee','width': '92%','border': 'none', 'height': '30px','borderRadius':'10px', 'alignItems':'center','padding':'10px'}}  {...register("email", { required: true })} placeholder="email@exemple.com" />  
         {errors.Password && <p style={{'background':'pink', 'padding':'10px'}}>password is required.</p>}
  Password <input style={ {'background-color': '#eee','border': 'none', 'borderRadius':'10px', 'width':'92%',   'height': '30px','padding':'10px' }}  {...register("Password", { required: true })} placeholder="password"  type="password"/>
            <button style={{'backgroundColor' : '#ed0c39','border': "none", 'padding': '17px','color': "white",'width': "100%  ",'textAlign': "center",'textDecoration': "none",'fontSize': "18px",'borderRadius':'10px', 'alignItems':'center', 'marginTop':'25px'}}>
              <b>Login</b> 
            </button>   
         </form>       
  
                    
        
        </>
    )
}

export default Login;