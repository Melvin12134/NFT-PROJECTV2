import './Login.css';
import {useState, useEffect} from 'react';

import Web3 from 'web3';
import getWeb3 from 'web3';
import SimpleStorageContract from 'web3';
import {test} from '../Connectwallet'

export const Login = (props) => {



/*const [web3, setWeb3] = useState(undefined);
const [accounts, setAccounts] = useState(undefined);
const [contract, setContract] = useState(undefined);

useEffect(() => {

  const init = async() => {


    const web3 = await getWeb3();

    const accounts = await web3.eth.getAccounts();

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = SimpleStorageContract.networks[networkId];
    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      deployedNetwork && deployedNetwork.address,
    );

    setWeb3(web3);
    setAccounts(accounts);
    setContract(contract);
  }
  init()
},[]
)*/


const [isLogin, setIsLogin] = useState(1);

const ToggleTab = (index) => {
    setIsLogin(index);
    console.log(isLogin);
}

    return (props.trigger) ? (
            <div className="logcontainer">
                <h1 className="metamask">Login with MetaMask</h1>
               <div className="metamaskborder"> <img height={100} src="/Images/metamask.svg"></img> </div>
                <button className="submitbtn">Login</button>
                {/*<div className="h1container">
                    <h1 onClick={() => ToggleTab(1)} id={isLogin === 1 ? "active" : ""}>Login</h1>
                    <h1 onClick={() => ToggleTab(2)} id={isLogin === 2 ? "active" : ""}>Sign Up</h1> 
                </div>*/}
              {/*isLogin === 1 ? 
                <div className="logincontainer">
                  <h1>Welcome Back!</h1>
                  
                    <input placeholder="Username"></input>
                    <input placeholder="Password"></input>
                    <button className="submitbtn">Submit</button>
                </div>
              :              
                <div className="signupcontainer">
                  <h1>Join The Community!</h1>
                    <input placeholder="Username"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Password"></input>
                    <input placeholder="Repeat Password"></input>
                    <button className="submitbtn">Create Account</button>
              </div>*/}
            </div>

    ) : "";
}