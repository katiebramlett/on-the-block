// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

// Smart contract for rental contract payments
contract RentalContract {

    // Rental Contract Struct with all necessary variables
    struct Contract {
        address payable landlordAddr;
        address payable tenantAddr;
        uint monthlyAmount;
        uint numberMonths;
    }

    mapping (uint => Contract) contracts;
    uint numContracts;

    // Create new contract between 2 users (landlord and tenant)
    function createNewContract(address payable landlordAddr, address payable tenantAddr, uint monthlyAmount, uint numberMonths) public returns (uint contractID) {
        contractID = numContracts++;
        Contract storage newContract = contracts[contractID];
        newContract.landlordAddr = landlordAddr;
        newContract.tenantAddr = tenantAddr;
        newContract.monthlyAmount = monthlyAmount;
        newContract.numberMonths = numberMonths;
    }

    // Checks balance of account
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    // Send money from one account to another account (transaction of money)  
    function payRent(address payable _To) public payable {
        _To.transfer(msg.value);
        // _To.call{value: msg.value, gas: 2300}(abi.encodeWithSignature(signatureString, arg);) returns (bool, bytes);
    }

    // Upon start of new contract, initiate the start of monthly recurring payments
    // Set up monthly recurring payments
    // function setupMonthlyPayments() {

    // }

    // Terminate smart contract
    // function terminateContract() {

    // }

}