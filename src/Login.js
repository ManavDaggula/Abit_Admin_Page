import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { auth } from "./FirebaseAuthentication"
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import App from "./App";

export default function Login() {
    const [user, setUser] = useState({})
    const [getParam, setParam] = useSearchParams()
    let data = {}
    // console.log(getParam.get("name"))
    data["name"] = getParam.get("name")
    data["phone"] = getParam.get("phone")
    data["email"] = getParam.get("email")
    data["dept"] = getParam.get("dept")
    data["year"] = getParam.get("year")
    data["event"] = getParam.get("event")
    // let loggedIn = false

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        // loggedIn = !loggedIn
        console.log(user)
    })
    const renderForm = (
        <div className="form">
            <form onSubmit={(e) => {
                e.preventDefault()
                const username = e.target.uname.value
                const password = e.target.pass.value
                console.log(username, password)
                signInWithEmailAndPassword(auth, username, password).then(() => { console.log("succefulyy logged in") })
            }
            }>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                {user?.email}
                <div className="title">Sign In</div>
                {!user ? renderForm : <App data={data}/>}
            </div>
            <button onClick={async () => { signOut(auth) }}>Sign Out</button>
        </div>
    );
}