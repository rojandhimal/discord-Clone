import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          dispatch(login({
            uid : authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName : authUser.displayName,
          }))
      }
      else {
          dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user    ? (
        <>
                <Sidebar />
                <Chat />
        </>
      )    :    (
        
        
        
        <h2><Login /></h2>
      
      
      
      )}
    </div>
  );
}

export default App;
