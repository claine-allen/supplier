import React, {useContext} from "react";
import {TransactionContext} from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { Transaction } from "ethers";

const TransactionCard=({addressTo,addressFrom,timestamp,message,keyword,amount,url})=>{
  return (
    <div className="transactionCard">
      <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener no referrer">
      <p>From: {addressFrom}</p>
      </a>
      <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener no referrer">
      <p>To: {addressTo}</p>
      </a>
      <p>Amount:{amount} ETH</p>
      {message && (
        <>
        <br/>
        <p>Message:{message}</p>
        </>
      )}
      <p>{timestamp}<br/><br/></p>

    </div>
  )
}

const Transactions=()=>{
  const {currentAccount}=useContext(TransactionContext);
    return(
      <div className="transactions">
        {currentAccount?(<h3 className="fw">Latest Transactions</h3>):(<h3 className="fw">connect account to see latest changes</h3>)}

        {dummyData.reverse().map((Transaction,i)=>(
          <TransactionCard key={i}{...Transaction}/>
        ))}
      </div>
    );
}

export default Transactions;