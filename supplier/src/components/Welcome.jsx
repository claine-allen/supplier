import React,{useContext} from "react";
import Loader from "./Loader";

import { TransactionContext } from "../context/TransactionContext";

const Input=({placeholder,name,type,value,handleChange})=>(
    <input
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e)=>handleChange(e,name)}
    className="inputtable"
    />
)

const Welcome=()=>{
    const {connectWallet,currentAccount,formData,sendTransaction,handleChange}=useContext(TransactionContext);

 
    const handleSUBMIT=(e)=>{
        const{addressTo,amount,keyword,message}=formData;

        e.preventDefault();

        if(!addressTo||!amount) return;

        sendTransaction();
    }

    return(
        <div className="welcome">
            <h1>Make transactions now, <br/>Verify forever!</h1>
            <p>Welcome To Blockcheck!<br/>Your one stop application for fake product detection!</p>
            <button type="button"
            className="connectwallet"
            onClick={connectWallet}>
            Connect Wallet
            </button>
            
            <div className="features-table-container">
            <table className="featurestable">
            <th>Why choose Blockcheck?</th>
                <tr>
                    <td>Reliability</td>
                    <td>Security</td>
                    <td>Ethereum</td>
                </tr>
                <tr>
                    <td>Web 3.0</td>
                    <td>Metamask</td>
                    <td>Infura</td>
                </tr>
            </table>
            </div>

            <div className="input-table-container">
            <table className="inputtable">
                    <tr><Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} /></tr>
                    <tr><Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} /></tr>
            </table>
            </div>
            <button
            type="button"
            onClick={handleSUBMIT}
            className="connectwallet"
            >
                Send (ETH)
            </button>
            
        </div>
    );
}

export default Welcome;