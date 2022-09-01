import React from 'react'
import { useSetState } from 'react-use';

export const context = React.createContext(null);

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null
}
export const ContextProvider = props => {
    const [state, setState] = useSetState(initialState);
  console.log(state)
    const setLoginPending = (isLoginPending) => setState({isLoginPending});
    const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
    const setLoginError = (loginError) => setState({loginError});
   
    
    const login = (data) => {
      setLoginPending(true);
      setLoginSuccess(false);
      setLoginError(null);
  
      fetchLogin( data, error => {
        console.log(data)
        setLoginPending(false);
        if (!error) {
          setLoginSuccess(true);
        } else {
          setLoginError(error);
          console.log(error)
        }
      })
    }
    const logout = () => {
      localStorage.removeItem("localstorageApi");
      
      setLoginPending(false);
      setLoginSuccess(false);
      setLoginError(null);


    }
  
    return (
      <context.Provider
        value={{
          state,
          login,
          logout,
        }}
      >
        {props.children}
      </context.Provider>
    );
  };
  const fetchLogin = (data, callback) => 
  {  console.log(data.email)

    if (data.email === 'admin' && data.Password === 'admin') {
      return callback(
     localStorage.setItem('localstorageApi', JSON.stringify(data))
      )
    } else {
      return callback(new Error('Invalid email and password'));
    }}
  