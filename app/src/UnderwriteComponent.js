import React from 'react';
import { drizzleConnect } from "drizzle-react";
import {AccountData, ContractForm, ContractData} from 'drizzle-react-components';

const UnderwriteComponent = () => (

  <div>
    <div className="underwrite-div">
      <div className="buy-insurance"><h2><b> Buy Insurance </b></h2></div>
      <div className="underwrite-tag"><p> By clicking the submit button, you agree to pay 3 ETH towards decentralized micro health insurance scheme </p></div>
      <div className="underwrite-button">
      <ContractForm
      contract="Insurance"
      method="underwriteProcess"
      sendArgs={{
        value: '3000000000000000000'
      }} />
      </div>
    </div>

    <div className="claim-div">
      <div className="claim-title"><h2><b> Claim Insurance </b></h2></div>
      <div className="underwrite-tag"><p> Update the patient billing info with bill number and bill amount in the feilds below </p></div>
      <div className="claim-button">
        <ContractForm
          contract="Insurance"
          method="claimProcess"
          labels={["Patient Address", "Bill Number", "Bill Amount"]} />
      </div>
    </div>

  <div className="reimburse-div">
    <div className="claim-title"><h2><b> Reimburse Claim </b></h2></div>
    <div className="underwrite-tag"><p> Input the patient public key to reimburse any claims whose bill is submitted to the blockchain </p></div>
    <div>
      <ContractForm
        contract="Insurance"
        method="reimburseProcess"
        labels={["Patient Address"]} />
    </div>
  </div>
</div>
)

export default UnderwriteComponent;
