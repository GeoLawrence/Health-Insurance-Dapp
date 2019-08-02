pragma solidity ^0.5.0;

contract Insurance {               // contract name

  struct Customer {               // stores patient data
    bool verifiedTrue;
    bool policyValid;
    uint256 lastPayment;
    uint256 billNumber;
    uint256 amount;
  }
  mapping (address => Customer) public clientAddress;         // maps patient address to struct
  uint256 public paymentPeriod = 1 seconds;                   // maturity period
  address payable public healthProvider = msg.sender;         // hospital public key

  modifier restricted {                                       // restricted to hospital admin
    require (msg.sender == healthProvider);
    _;
  }

  event underwrite (address patient, string insuranceStatus, uint256 premium);                          // confirms insurance sold
  event claim (address hospital, string hospitalStatus, uint256 billAmount, uint256 billAddress);       // confirms logging of bill
  event reimburse (address admin, string claimStatus, uint256 claimAmount);                             // confirms reimbursement

  function underwriteProcess() public payable returns(bool) {           // underwrites and accepts the policy
    require (msg.value > 0.01 ether);                                         // checks premium amount
    Customer storage customer = clientAddress[msg.sender];                    // maps patient to struct
    customer.lastPayment = now;                                               // stores current time
    customer.policyValid = true;                                              // marked policy valid
    emit underwrite(msg.sender, "Policy Underwritten", msg.value);            // logs event underwrite
    return true;
  }

  function claimProcess(address patient, uint number, uint bill) public restricted returns(bool) {      // logs patient bill data to blockchain
    Customer storage customer = clientAddress[patient];
    if (customer.policyValid && customer.lastPayment + paymentPeriod < now ) {                                // checks if policy is valid and matured
      customer.billNumber = number;                                                                           // stores bill number
      customer.amount = bill;                                                                                 // stores bill amount
      customer.verifiedTrue = true;                                                                           // marks policy valid
      emit claim(msg.sender, "Bill Uploaded", customer.amount, customer.billNumber);                          // logs event claim
      return true;
    }
  }

  function reimburseProcess(address patient) public restricted payable returns(bool) {  // reimburse insurance amount to hospital
    Customer storage customer = clientAddress[patient];
    if (customer.policyValid && customer.verifiedTrue) {                                        // checks if policy is valid and claim is verified
      healthProvider.transfer(customer.amount);                                                 // transfer bill amount
      customer.verifiedTrue = false;                                                            // flags bill as claimed
      emit reimburse(msg.sender, "Bill Settled", customer.amount);                              // logs event reimburse
      return true;
    }
  }

  function () external payable {      // fallback function
  }
}
