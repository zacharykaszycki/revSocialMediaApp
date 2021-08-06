import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Login.css';
import sample from './fire.mp4';
import { useSelector, useDispatch } from 'react-redux'

function LoginForm() {
    
    const [usernameState, setUsernameState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    
    let axiosFetcher = async () => {

        eve.preventDefault();

        const axiosPayLoad = await axios.post('http://localhost:8080/project2hibernate/api/logincontrol/login', {
            "user_username": usernameState,
            "user_password": passwordState
        });

        const axiosData = axiosPayLoad.data;

        console.log("axiosdata: ", axiosData);

        // setPokemonData({"name": axiosData.name, "image": axiosData.sprites.front_default});
        // if (axiosData.ersUsername != null)
        //     props.onLogin(axiosData);
    }
    

    return (
        <form>
            <video className='background-video' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div className='form-container'>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">username</label>
                        <input type="text" name="username" id="usernameId" value={usernameState} onChange={(eve) => { setUsernameState(eve.target.value); }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="passwordId" value={passwordState} onChange={(eve) => { setPasswordState(eve.target.value); }}/>
                    </div>
                    <input onClick={axiosFetcher} type="submit" value="Login" className="submitbtn"/>
                    <input type="submit" value="Forgot Password" className="submitbtn"/>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;
