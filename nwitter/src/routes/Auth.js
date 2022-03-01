import {useState} from "react";
import {authService,firebaseInstance} from "fbase";
import AuthForm from "../components/AuthForm";

const Auth=()=>{



    const onSocialClick=async (event)=>{
        const{
            target:{name},
        }=event;
        let provider;
        if(name==="google"){
            provider=new firebaseInstance.auth.GoogleAuthProvider();
        }
        else if(name==="github"){
            provider=new firebaseInstance.auth.GithubAuthProvider();
        }
        const data=await authService.signInWithPopup(provider);
    }

    return(
        <div>
            <AuthForm/>
            <div>
                <button onClick={onSocialClick} name="google">구글 계정으로 로그인</button>
                <button onClick={onSocialClick} name="github">깃허브 계정으로 로그인</button>
            </div>
        </div>
    )
}

export default Auth;