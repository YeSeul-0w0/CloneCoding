import {useEffect, useState} from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
    const [init, setInit]=useState(false);
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [userObj, setUserObj]=useState(null);
    const refreshUser=()=>{
        setUserObj(authService.currentUser);
    }

    useEffect(()=>{
        authService.onAuthStateChanged((user)=>{
            if(user){
                const user=authService.currentUser;
                setUserObj({
                    uid:user.uid,
                    displayName:user.displayName,
                    updateProfile : (args)=>user.updateProfile(args),
                });
            }
            else{
                setUserObj(false);
            }
            setInit(true);
        });
    },[]);


  return (
      <>
          {init ? (
              < AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser}/>
          ): (
              "initializing…"
          )}
      </>
  );
}

export default App;
